import React, { useState } from 'react'
import Header from '../../components/Header/Header.js'
import heroimage from '../../images/watercolor-4116932_1280.png';
import img1 from '../../images/icons8-search.gif';
import imgé from '../../images/icons8-calculator-100.png';
import { FaMapMarkerAlt, FaBookmark, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { Button, Card, CardHeader, CardBody, Avatar, CardFooter, Select, SelectItem,Modal, Dropdown,useDisclosure, chip, Chip, Image, Divider, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Checkbox, } from '@nextui-org/react';
import { Link, Links } from 'react-router-dom';

export const JobFinder = () => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
        setIsBookmarked((prev) => !prev);
    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();



    return (
        <div>











            <Header />


            <div className="hero-section min-h-[40vh]"> {/* Adjusted height */}
                <section
                    style={{
                        backgroundImage: `url(${heroimage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="welcome-section "
                >
                    <div className="p-14 text-center">
                        {/* Hero Section Header */}
                        <div className="p-4">
                            <h1
                                style={{ color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                                className="text-5xl font-bold"
                            >
                                Plus de 130 000 opportunités professionnelles en startup, à distance et sur site.
                            </h1>
                        </div>
                        <div className="p-4">
                            <h3
                                style={{
                                    color: "#FFFFFF",
                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                                }}
                                className="text-lg"
                            >
                                Explorez votre avenir professionnel :
                            </h3>
                        </div>

                        {/* Search and Filter Bar */}
                    </div>
                </section>


            </div>


            <div>
                <div className="container mx-auto p-5">
                    <div className='text-start p-4'>
                        <h1 className='font-bold text-3xl'>Des emplois adaptés à vos intérêts</h1>
                        <p className='text-sm'>En fonction de vos préférences et de votre activité récente, nous avons sélectionné ces opportunités rien que pour vous. Explorez des emplois qui correspondent à vos compétences et à vos objectifs de carrière.</p>
                    </div>

                    <div className="flex justify-start gap-3 p-4">
                        <Card radius='none' className="max-w-[340px]">
                            <CardHeader className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <Avatar size="lg" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-sm text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-sm tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button className='font-semibold' color="primary" radius="full" size="sm" variant='flat'>Apply</Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-sm text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500"><FaMapMarkerAlt /></span>
                                    <span className='text-sm font-semibold'>Casablanca/Morocco</span>
                                </div>
                                <p>We are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications.</p>
                                <div className="pt-2 flex flex-wrap gap-2">
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color="primary"
                                        className="font-semibold text-stone-950 bg-primary-50"
                                    >
                                        Fulltime
                                    </Chip>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color="primary"
                                        className="font-semibold text-stone-950 bg-primary-50"
                                    >
                                        Javascript
                                    </Chip>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        color="primary"
                                        className="font-semibold text-stone-950 bg-primary-50"
                                    >
                                        React.js
                                    </Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-sm">11</p>
                                    <p className="text-default-400 text-sm">jours</p>
                                </div>
                                <div className="flex gap-1" onClick={handleBookmarkClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
                                    <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease" }} className="hover:text-blue-400" />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card radius='none' className="max-w-[340px]">
                            <CardHeader className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <Avatar size="lg" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-sm text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-sm tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button className='font-semibold' color="primary" radius="full" size="sm" variant='flat'>Apply</Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-sm text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500"><FaMapMarkerAlt /></span>
                                    <span className='text-sm font-semibold'>Casablanca/Morocco</span>
                                </div>
                                <p>We are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications.</p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat'>FullTime</Chip>
                                    <Chip variant='flat'>Javascript</Chip>
                                    <Chip variant='flat'>Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-sm">11</p>
                                    <p className="text-default-400 text-sm">jours</p>
                                </div>
                                <div className="flex gap-1" onClick={handleBookmarkClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
                                    <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease" }} className="hover:text-blue-400" />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card radius='none' className="max-w-[340px]">
                            <CardHeader className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <Avatar size="lg" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-sm text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-sm tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button className='font-semibold' color="primary" radius="full" size="sm" variant='flat'>Apply</Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-sm text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500"><FaMapMarkerAlt /></span>
                                    <span className='text-sm font-semibold'>Casablanca/Morocco</span>
                                </div>
                                <p>We are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications.</p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat'>FullTime</Chip>
                                    <Chip variant='flat'>Javascript</Chip>
                                    <Chip variant='flat'>Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-sm">11</p>
                                    <p className="text-default-400 text-sm">jours</p>
                                </div>
                                <div className="flex gap-1" onClick={handleBookmarkClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
                                    <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease" }} className="hover:text-blue-400" />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card radius='none' className="max-w-[340px]">
                            <CardHeader className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <Avatar size="lg" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-sm text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-sm tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button className='font-semibold' color="primary" radius="full" size="sm" variant='flat'>Apply</Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-sm text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500"><FaMapMarkerAlt /></span>
                                    <span className='text-sm font-semibold'>Casablanca/Morocco</span>
                                </div>
                                <p>We are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications.</p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat'>FullTime</Chip>
                                    <Chip variant='flat'>Javascript</Chip>
                                    <Chip variant='flat'>Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-sm">11</p>
                                    <p className="text-default-400 text-sm">jours</p>
                                </div>
                                <div className="flex gap-1" onClick={handleBookmarkClick} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}>
                                    <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease" }} className="hover:text-blue-400" />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>
                            </CardFooter>
                        </Card>
                        {/* Repeat for other cards */}
                    </div>

                    <div className="jobListing flex mx-auto p-4 gap-8">
                        <div className="jobs w-[65%]">
                            <div className='container'>
                                <div className='headeing text-start flex justify-between  align-center'>
                                    <h1 className='font-bold text-xl'>Emplois en ingénierie

                                    </h1>
                                    <Link className='hover:text-sky-600 underline'>Voir tous les emplois
                                    </Link>
                                </div>
                                <div className='jobsBasedOnFiled py-4'>
                                    <div>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>


                                    </div>

                                </div>

                            </div>
                            <div className='container'>
                                <div className='headeing text-start flex justify-between  align-center'>
                                    <h1 className='font-bold text-xl'>Emplois en ingénierie

                                    </h1>
                                    <Link className='hover:text-sky-600 underline'>Voir tous les emplois
                                    </Link>
                                </div>
                                <div className='jobsBasedOnFiled py-4'>
                                    <div>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>


                                    </div>

                                </div>

                            </div>
                            <div className='container'>
                                <div className='headeing text-start flex justify-between  align-center'>
                                    <h1 className='font-bold text-xl'>Emplois en ingénierie

                                    </h1>
                                    <Link className='hover:text-sky-600 underline'>Voir tous les emplois
                                    </Link>
                                </div>
                                <div className='jobsBasedOnFiled py-4'>
                                    <div>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>


                                    </div>

                                </div>

                            </div>
                            <div className='container'>
                                <div className='headeing text-start flex justify-between  align-center'>
                                    <h1 className='font-bold text-xl'>Emplois en ingénierie

                                    </h1>
                                    <Link className='hover:text-sky-600 underline'>Voir tous les emplois
                                    </Link>
                                </div>
                                <div className='jobsBasedOnFiled py-4'>
                                    <div>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>
                                        <Card shadow='none' className="max-w-[950px]">
                                            <CardHeader className='flex align-center justify-between' >
                                                <div className='flex gap-3'>
                                                    <Image
                                                        alt="nextui logo"
                                                        height={40}
                                                        radius="sm"
                                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                                        width={40}
                                                    />
                                                    <div className="flex flex-col text-start">
                                                        <p className="text-md font-semibold">PART TIME - Remote Caller and Appointment Setter (Performance-Based)</p>
                                                        <p className="text-small text-default-500">nextui.org</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <div className="flex gap-4 ">
                                                        <FaBookmark style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />
                                                        <FaPaperPlane style={{ color: isBookmarked ? "#1E90FF" : "#D6E8FC", transition: "color 0.3s ease", cursor: 'pointer' }} className="hover:text-blue-400" />

                                                    </div>

                                                </div>
                                            </CardHeader>
                                            <Divider />

                                        </Card>


                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="leftBar w-[30%]  min-h-[fit-content] sticky top-0">
                            <div className='ctoHeading p-4 border'>
                                <img className='mx-auto' src={img1} />
                                <div className='py-2 mt-4'>
                                    <h1 className='font-semibold'>Décrochez l'emploi de vos rêves aujourd'hui !</h1>

                                    <p className='text-small py-2'>Maximisez votre potentiel de carrière en créant un compte chez nous. Partagez votre profil avec les meilleurs employeurs et recevez des correspondances d'emploi personnalisées directement dans votre boîte de réception.</p>

                                    <Button size='sm' variant='flat' color="primary">envoyez-nous votre CV</Button>
                                </div>
                            </div>
                            <div className='ctoHeading p-4 border mt-5'>
                                <img className='mx-auto' src={imgé} />
                                <div className='py-2 mt-4'>
                                    <h1 className='font-semibold'>Connaissez votre valeur</h1>

                                    <p className='text-small py-2'>Filtrez par secteur d'activité, titre de poste, emplacement et plus encore.
                                    </p>

                                    <Button size='sm' variant='flat' color="primary">calculateur de salaire
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>





        </div>
    )
}
