import React from 'react'
import SunIcon from '@heroicons/react/24/solid/esm/SunIcon'
import BoltIcon from '@heroicons/react/20/solid/esm/BoltIcon'
import ExclamationCircleIcon from '@heroicons/react/20/solid/esm/ExclamationCircleIcon'

function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-white'>
            <h1 className='text-5xl font-bold mb-20'> CloneGpt 1.0</h1>
            <div className='flex space-x-2 text-center'>
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <SunIcon className='h-8 w-8' />
                        <h2>Examples</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoText'>`Explain Something to me`</p>
                        <p className='infoText'>`What is the difference between a dog and a cat?`</p>
                        <p className='infoText'>`What is the color sun?`</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <BoltIcon className='h-8 w-8' />
                        <h2>Capabilities</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoText'>`Change the CatGPT model`</p>
                        <p className='infoText'>`Message are stored in Firebase`</p>
                        <p className='infoText'>`How Toast notification chat is timing`</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <ExclamationCircleIcon className='h-8 w-8' />
                        <h2>Limitations</h2>
                    </div>
                    <div className='space-y-2'>
                        <p className='infoText'>`May occasional generate incorrect information`</p>
                        <p className='infoText'>`May occasional produce harmful instructions or biased content`</p>
                        <p className='infoText'>`Limited knowlege of world and events after 2021`</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
