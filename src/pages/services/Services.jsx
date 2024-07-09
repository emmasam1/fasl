import { MdMenuBook } from 'react-icons/md';
import { UserOutlined, MailOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import img1 from '../../assets/image/blog-1.jpg'
import img2 from '../../assets/image/portfolio-1.jpg'
import img3 from '../../assets/image/blog-5.jpg'
import img4 from '../../assets/image/service_bg_2.jpg'

const Services = () => {
    const DummyData = [
        {
          id: 1,
          imageUrl: img1,
          title: 'Refurbishment',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus orci ut posuere volutpat.',
          link: '#',
        },
        {
          id: 2,
          imageUrl: img2,
          title: 'House Extensions',
          content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          link: '#',
        },
        {
          id: 3,
          imageUrl: img3,
          title: 'Electricity',
          content: 'Sed aliquam eros nec enim pharetra, at condimentum lorem accumsan. In at ipsum ullamcorper, vehicula.',
          link: '#',
        },
        {
          id: 4,
          imageUrl: img4,
          title: 'General construction',
          content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
          link: '#',
        },
      ];
      
  return (
    <div>
        <div className="w-full h-[200px] bg-[url('assets/image/header_bg-2.jpg')] relative lg:-top-[4.5rem] flex justify-center items-center bg-contain bg-no-repeat bg-fixed">
            <h1 className='font-bold text-5xl text-white'>Services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'></div>
        <div className='w-full flex justify-center items-center'>
           <div className='w-[60%] m-auto'>
              <h1 className='flex justify-center items-center font-light text-3xl text-gray-500'>We are all constructed out of our self dialogue.</h1>
             <h4 className='flex justify-center items-center text-center font-light text-md text-gray-600'>
                 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy
                 nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.
             </h4>
           </div>
        </div>
        <div className="p-5 w-full mt-20">
      <div className="w-full sm:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 py-12 border sm:border-gray-200">
        <div className="flex items-start justify-around hover:bg-gray-200 hover:text-red-500 transition-colors duration-300 p-4 sm:p-0">
          <div className="flex items-start justify-around">
            <MdMenuBook className="text-4xl sm:text-5xl mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-normal">BROCHURE</h3>
              <p className='py-2 sm:py-4 text-sm sm:text-base'>In these words,  <br /> however, there is no question</p>
            </div>
          </div>
          <div className="self-end">
            <button className="border-2 border-red-500 text-gray-600 px-4 py-2 rounded flex items-center relative overflow-hidden hover:bg-red-500 hover:text-white transition-colors duration-300">
              <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition-all duration-300"></span>
              <span className="relative z-10">Download</span>
            </button>
          </div>
        </div>
        <div className="flex items-start justify-around hover:bg-gray-200 hover:text-red-500 transition-colors duration-300 p-4 sm:p-0">
          <div className="flex items-start">
            <MailOutlined className="text-4xl sm:text-5xl mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-normal">MEET & ASK</h3>
              <p className='py-2 sm:py-4 text-sm sm:text-base'>In these words,  <br /> however, there is no question</p>
            </div>
          </div>
          <div className="self-end">
            <button className="border-2 border-red-500 text-gray-600 px-4 py-2 rounded flex items-center relative overflow-hidden hover:bg-red-500 hover:text-white transition-colors duration-300">
              <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition-all duration-300"></span>
              <span className="relative z-10">CONTACT US</span>
            </button>
          </div>
        </div>
      </div>
    </div>
        <h1 className='text-center py-5 font-bold text-2xl text-black'>ALL SERVICES</h1>
     <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {DummyData.map((item) => (
          <div key={item.id} className="bg-white group rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer">
            <img src={item.imageUrl} alt={item.title} className="w-full h-52 object-cover py-4" />
            <div>
              <h3 className="text-xl font-semibold mb-1 transition duration-300 ease-in-out group-hover:text-red-500">{item.title}</h3>
              <p className="text-sm py-2">{item.content}</p>
              <Link href={item.link} className='text-red-500 hover:underline text-center'>Read More...</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* end */}
    </div>
  )
}

export default Services