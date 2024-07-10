import { MdMenuBook } from 'react-icons/md';
import { IoIosMailOpen } from "react-icons/io"
import { Link } from 'react-router-dom';
import img1 from '../../assets/image/blog-1.jpg'
import img2 from '../../assets/image/portfolio-1.jpg'
import img3 from '../../assets/image/blog-5.jpg'
import img4 from '../../assets/image/service_bg_2.jpg'
import Scroll from '../../components/top/Scroll';

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
        {
            id: 5,
            imageUrl: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Commercial constructions',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 6,
            imageUrl: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'General construction',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 7,
            imageUrl: 'https://images.pexels.com/photos/7217930/pexels-photo-7217930.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Housing Renovations',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 8,
            imageUrl: 'https://images.pexels.com/photos/927805/pexels-photo-927805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Marketing & Advertising',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 9,
            imageUrl: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Hotel Management',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 10,
            imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Event planning',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 11,
            imageUrl: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Auctioning',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
          {
            id: 12,
            imageUrl: 'https://media.istockphoto.com/id/688243916/photo/tree-alley-at-spring.jpg?s=1024x1024&w=is&k=20&c=T3AM5-94vjhToc0ISj3xLErsDl0bd-HFY3BYpVZx30c=',
            title: 'Aforestation & deforestation',
            content: 'Fusce non ligula et nisl congue tempus. Donec eget dui vel lorem lacinia ultricies non vel justo.',
            link: '#',
          },
      ];
      
  return (
    <div>
        <div className="w-full h-[200px] bg-[url('assets/image/header_bg-2.jpg')] relative lg:-top-[4.5rem] flex justify-center items-center bg-contain bg-no-repeat bg-fixed">
            <h1 className='font-bold text-4xl lg:text-5xl text-white'>Services</h1>
      </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-full md:w-[60%] m-auto'>
            <h1 className='text-2xl md:text-2xl lg:text-3xl font-light text-gray-500 text-center mb-4'>
              We are all constructed out of our self dialogue.
            </h1>
            <h4 className='text-md md:text-lg lg:text-lg font-light text-gray-500 text-center'>
             Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </h4>
        </div>
        </div>

        <div className="p-5 w-full mt-20">
      <div className="w-full sm:w-[95%] m-auto group grid grid-cols-1 sm:grid-cols-2 gap-4 py-12 border sm:border-gray-200">
        <div className="flex items-start justify-around p-4 sm:p-0">
          <div className="flex items-start justify-around">
            <MdMenuBook className="text-4xl sm:text-5xl mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-normal group-hover:text-red-500 transition-colors duration-300 text-gray-600">BROCHURE</h3>
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
        <div className="flex items-start justify-around p-4 sm:p-0">
          <div className="flex items-start">
            <IoIosMailOpen className="text-4xl sm:text-5xl mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-normal group-hover:text-red-500 transition-colors duration-300 text-gray-600">MEET & ASK</h3>
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
     <div className="p-5 w-full">
      <div className="grid grid-cols-1 border w-[95%] py-6 m-auto sm:grid-cols-2 md:grid-cols-4 gap-6">
        {DummyData.map((item) => (
          <div key={item.id} className="bg-white group rounded-sm shadow-sm p-4 flex flex-col justify-between cursor-pointer">
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
    <Scroll />
    </div>
  )
}

export default Services