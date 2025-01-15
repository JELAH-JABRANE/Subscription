import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Button, Card, CardHeader, CardBody, Avatar, CardFooter, Select, SelectItem, Dropdown, chip, Chip } from '@nextui-org/react';
import svg1 from '../../images/10 SCENE.svg';
import svg11 from '../../images/9 SCENE.svg';
import svg2 from '../../images/hand-arrow-up.svg';
import heroimage from '../../images/waves-8905720_1920.png';
import svg3 from '../../images/sliders.svg';
import svg4 from '../../images/users-four.svg';
import { Footer } from '../../components/Footer/Footer';
import { Input } from "@nextui-org/react";

import { FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

import { Skeleton } from "@nextui-org/skeleton";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();

    const [isBookmarked, setIsBookmarked] = useState(false);

    // Toggle the bookmarked state
    const handleBookmarkClick = () => {
        setIsBookmarked((prev) => !prev);
    };

    return (
        <div>
            <Header />
            <div className="hero-section min-h-screen">
                <section
                    style={{
                        backgroundImage: `url(${heroimage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="welcome-section border-b border-gray-300"
                >
                    <div className="p-10 text-center">
                        {/* Hero Section Header */}
                        <div className="p-4">
                            <h1
                                style={{ color: "#FFFFFF", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                                className="text-5xl font-bold"
                            >
                                Trouvez le travail fait pour vous.
                            </h1>
                        </div>
                        <div className="p-4">
                            <h3
                                style={{
                                    color: "#FFFFFF",
                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                                }}
                                className=" text-lg"
                            >
                                Simplifiez votre recherche avec notre plateforme intuitive et puissante.
                            </h3>
                        </div>


                        {/* Search and Filter Bar */}
                        <div className="p-4 flex justify-center">
                            <div
                                className="flex items-center gap-2 bg-white p-3 rounded-full shadow-lg"
                                style={{
                                    maxWidth: "800px",
                                    width: "100%",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                {/* Search Input */}
                                <Input
                                    clearable
                                    bordered
                                    fullWidth
                                    placeholder="Mots cleé (e.g., développeur)"
                                    css={{ flex: 1 }}
                                    contentLeft={<i className="fas fa-search text-gray-400" />}
                                />

                                {/* Job Filter Select */}
                                <Select
                                    bordered
                                    placeholder="Type de travail"
                                    style={{ minWidth: "180px" }}
                                    options={[
                                        { label: "Full-Time", value: "full-time" },
                                        { label: "Part-Time", value: "part-time" },
                                        { label: "Freelance", value: "freelance" },
                                        { label: "Internship", value: "internship" },
                                    ]}
                                />
                                <Select
                                    bordered
                                    placeholder="Type de travail"
                                    style={{ minWidth: "180px" }}
                                    options={[
                                        { label: "Full-Time", value: "full-time" },
                                        { label: "Part-Time", value: "part-time" },
                                        { label: "Freelance", value: "freelance" },
                                        { label: "Internship", value: "internship" },
                                    ]}
                                />

                                {/* Search Button */}
                                <Button
                                    auto
                                    rounded
                                    css={{
                                        backgroundColor: "#4CAF50",
                                        color: "#FFFFFF",
                                        fontWeight: "bold",
                                        padding: "0 20px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Chercher
                                </Button>
                            </div>
                        </div>

                        {/* <div className='UPLOADCV'>
                            <span style={{ color: '#FFFFFF' }} className='font-semibold underline'>Téléchargez votre CV -</span><span style={{ color: '#FFFFFF' }} className='text-small'>Faites-vous remarquer par les meilleurs employeurs !</span>
                        </div> */}
                    </div>
                </section>
                <section className="joblisting py-3">
                    <div className=" flex justify-center gap-3 container mx-auto p-4">

                        <Card className="max-w-[340px]">
                            <CardHeader className="flex items-start	 justify-between">
                                <div className="flex gap-5">
                                    <Avatar
                                        size="lg"
                                        src="https://nextui.org/avatars/avatar-1.png"
                                    />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-small text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-small tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button
                                    className='font-semibold'
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant='flat'

                                >
                                    Apply
                                </Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <span className='text-small font-semibold'>Casablanca/Morocco</span>
                                </div>

                                <p>FWe are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications. The ideal candidate will have a passion for creating innovative and user-friendly iOS applications.

                                </p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat' >FullTime</Chip>
                                    <Chip variant='flat' >Javascript</Chip>
                                    <Chip variant='flat' >Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">11</p>
                                    <p className=" text-default-400 text-small">jours</p>
                                </div>

                                <div
                                    className="flex gap-1"
                                    onClick={handleBookmarkClick}
                                    style={{
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <FaBookmark
                                        style={{
                                            color: isBookmarked ? "#1E90FF" : "#D6E8FC", // Clicked: Blue, Default: Light Blue
                                            transition: "color 0.3s ease", // Smooth transition
                                        }}
                                        className="hover:text-blue-400" // Change color on hover (optional)
                                    />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>



                            </CardFooter>
                        </Card>
                        <Card className="max-w-[340px]">
                            <CardHeader className="flex items-start	 justify-between">
                                <div className="flex gap-5">
                                    <Avatar
                                        size="lg"
                                        src="https://nextui.org/avatars/avatar-1.png"
                                    />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-small text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-small tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button
                                    className='font-semibold'
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant='flat'

                                >
                                    Apply
                                </Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <span className='text-small font-semibold'>Casablanca/Morocco</span>
                                </div>

                                <p>FWe are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications. The ideal candidate will have a passion for creating innovative and user-friendly iOS applications.

                                </p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat' >FullTime</Chip>
                                    <Chip variant='flat' >Javascript</Chip>
                                    <Chip variant='flat' >Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">11</p>
                                    <p className=" text-default-400 text-small">jours</p>
                                </div>

                                <div
                                    className="flex gap-1"
                                    onClick={handleBookmarkClick}
                                    style={{
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <FaBookmark
                                        style={{
                                            color: isBookmarked ? "#1E90FF" : "#D6E8FC", // Clicked: Blue, Default: Light Blue
                                            transition: "color 0.3s ease", // Smooth transition
                                        }}
                                        className="hover:text-blue-400" // Change color on hover (optional)
                                    />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>



                            </CardFooter>
                        </Card>
                        <Card className="max-w-[340px]">
                            <CardHeader className="flex items-start	 justify-between">
                                <div className="flex gap-5">
                                    <Avatar
                                        size="lg"
                                        src="https://nextui.org/avatars/avatar-1.png"
                                    />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-small text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-small tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button
                                    className='font-semibold'
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant='flat'

                                >
                                    Apply
                                </Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <span className='text-small font-semibold'>Casablanca/Morocco</span>
                                </div>

                                <p>FWe are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications. The ideal candidate will have a passion for creating innovative and user-friendly iOS applications.

                                </p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat' >FullTime</Chip>
                                    <Chip variant='flat' >Javascript</Chip>
                                    <Chip variant='flat' >Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">11</p>
                                    <p className=" text-default-400 text-small">jours</p>
                                </div>

                                <div
                                    className="flex gap-1"
                                    onClick={handleBookmarkClick}
                                    style={{
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <FaBookmark
                                        style={{
                                            color: isBookmarked ? "#1E90FF" : "#D6E8FC", // Clicked: Blue, Default: Light Blue
                                            transition: "color 0.3s ease", // Smooth transition
                                        }}
                                        className="hover:text-blue-400" // Change color on hover (optional)
                                    />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>



                            </CardFooter>
                        </Card>
                        <Card className="max-w-[340px]">
                            <CardHeader className="flex items-start	 justify-between">
                                <div className="flex gap-5">
                                    <Avatar
                                        size="lg"
                                        src="https://nextui.org/avatars/avatar-1.png"
                                    />
                                    <div className="flex flex-col gap-1 items-start cursor-pointer">
                                        <h4 className="text-small text-start font-semibold leading-none text-default-600 underline">Frontend developer and UI/UX</h4>
                                        <h5 className="text-small tracking-tight text-default-400">Capgemini</h5>
                                    </div>
                                </div>
                                <Button
                                    className='font-semibold'
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant='flat'

                                >
                                    Apply
                                </Button>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <div className='jobLocation py-2 flex items-center gap-2'>
                                    <span className="text-red-500">
                                        <FaMapMarkerAlt />
                                    </span>
                                    <span className='text-small font-semibold'>Casablanca/Morocco</span>
                                </div>

                                <p>FWe are seeking a talented iOS Developer to join our team and contribute to the development of cutting-edge mobile applications. The ideal candidate will have a passion for creating innovative and user-friendly iOS applications.

                                </p>
                                <div className="pt-2 flex gap-2">
                                    <Chip variant='flat' >FullTime</Chip>
                                    <Chip variant='flat' >Javascript</Chip>
                                    <Chip variant='flat' >Reactjs</Chip>
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <div className="flex gap-1">
                                    <p className="font-semibold text-default-400 text-small">11</p>
                                    <p className=" text-default-400 text-small">jours</p>
                                </div>

                                <div
                                    className="flex gap-1"
                                    onClick={handleBookmarkClick}
                                    style={{
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <FaBookmark
                                        style={{
                                            color: isBookmarked ? "#1E90FF" : "#D6E8FC", // Clicked: Blue, Default: Light Blue
                                            transition: "color 0.3s ease", // Smooth transition
                                        }}
                                        className="hover:text-blue-400" // Change color on hover (optional)
                                    />
                                    <span className="text-sm text-gray-600">{isBookmarked ? "Saved" : "Save"}</span>
                                </div>



                            </CardFooter>
                        </Card>


                    </div>

                    <div className='exploreMorebtn'>
                        <Button onPress={() => {
                            navigate('/Jobs')
                        } } color="primary" variant='ghost'>Explore more</Button>

                    </div>


                </section>
            </div>
            <Footer />
        </div>
    );
};

