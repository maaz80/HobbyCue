import Image from 'next/image';

const Card = ({ Para, Button, Heading, Image1, Width, BG, IconWidth, hovertext, hovercolor }) => {
    return (
        <div className={`${Width}`}>
            {/* Cards */}
            <div className={`card border border-gray-500 rounded-md w-[100%] p-5 md:p-10 gap-6 flex flex-col h-[100%] ${BG} ${hovercolor} ${hovertext}  transition duration-300`}>
                <div className='flex gap-2'>
                    <Image className={`${IconWidth}`} src={Image1} alt={Heading} />
                    <div className='font-bold text-xl poppins-semibold'>{Heading}</div>
                </div>
                <p className='text-sm md:text-lg poppins-regular'>{Para}</p>
                <button className='border border-purple-600 w-[30%] md:w-[22%] rounded-md py-2 font-semibold text-purple-600 hover:bg-purple-600 hover:text-white poppins-regular'>{Button}</button>
            </div>
        </div>
    );
};

export default Card;
