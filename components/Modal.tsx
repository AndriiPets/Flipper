import React, { ChangeEvent, Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/24/outline'
import { db, storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function Modal() {
    const { data: session} = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const filePicker = useRef<HTMLInputElement>(null);
    const captionRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null | undefined>(null);

    const uploadPost = async () => {

        if (loading) return ;

        setLoading(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session?.user?.name,
            caption: captionRef.current?.value,
            profileImg: session?.user?.image,
            timestamp: serverTimestamp()
        })

        console.log(`new doc added with id:${docRef.id}`)

        const imageRef = ref(storage, `posts/${docRef.id}/image`)

        console.log(imageRef)

        await uploadString(imageRef, selectedFile as string, "data_url").then(async snapshot => {
            const downloadUrl = await getDownloadURL(imageRef);


            await updateDoc(doc(db, 'posts', docRef.id), {
                image: downloadUrl
            })
        });

        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
        
    }

    const addImageToPost = (e:ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        if (e.target.files) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            setSelectedFile(readerEvent.target?.result);
            console.log(selectedFile)
        }
    }


  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}>
            <div className='flex items-end justify-center min-h-[400]
            sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <Transition.Child
                as={Fragment}
                enter='ease-out duration-400'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveTo='opacity-0'
                leaveFrom='opacity-100'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>

                {/* Centering hack */}
                <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden="true">
                    &#8203;
                </span>

                <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                >
                    <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5
                    pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8
                    sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                        <div>
                            <div>
                                { selectedFile ? (
                                    <img src={selectedFile as string}
                                    className='w-full object-contain cursor-pointer'
                                    onClick={() => setSelectedFile(null)}
                                    />
                                ) : (
                                <div 
                                onClick={() => filePicker.current!.click()}
                                className='mx-auto flex items-center justify-center 
                                h-12 w-12 bg-red-100 cursor-pointer rounded-full'>
                                    <CameraIcon className='h-8 w-8 text-red-600 '
                                    aria-hidden='true' />
                                </div>
                                    
                                )}
                                
                                <div className='mt-3 text-center sm:mt-5'>
                                    <Dialog.Title
                                    as='h3'
                                    className='text-lg leading-6 font-medium text-gray-900'>
                                        Upload a photo
                                    </Dialog.Title>
                                    <div>
                                        <input 
                                        ref={filePicker}
                                        type='file'
                                        hidden
                                        onChange={addImageToPost}
                                        />
                                    </div>

                                    <div className='mt-2'>
                                        <input 
                                        ref={captionRef}
                                        className='border-none focus:ring-0 w-full text-center'
                                        type='text'
                                        placeholder='Please enter a caption...'
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className='mt-5 sm:mt-6'>
                                <button
                                disabled={!selectedFile}
                                onClick={uploadPost}
                                type='button'
                                className='inline-flex justify-center w-full rounded-md border border-transparent
                                shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm
                                disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300'
                                >{loading ? "Uploading..." : "Upload Post"}</button>

                            </div>
                        </div>

                    </div>
                </Transition.Child>

            </div>

        </Dialog>
     
    </Transition.Root>
  )
}

export default Modal
