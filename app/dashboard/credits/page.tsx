import Image from 'next/image';






export default async function Page() {

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className='relative w-32 h-32'>
                <Image
                    src="/images/robinChauve.jpg"
                    layout='fill'
                    objectFit='cover'
                    alt="Picture of the author"
                    className='rounded-full aspect-square'
                    />
            </div>
            <h1>Cet examen est l'oeuvre de Robin Hajnoczy</h1>
        </div>
    );
}