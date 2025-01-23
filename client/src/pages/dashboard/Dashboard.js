import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import { Footer } from '../../components/Footer/Footer';
import { DropdownTrigger, Input } from "@heroui/react";

import { FaMapMarkerAlt, FaBookmark, FaDownload } from 'react-icons/fa';
import { Card, CardHeader, Select, SelectItem, CardBody, CardFooter, Divider, Link, Image, Dropdown, Button, DropdownMenu, DropdownItem, ropdownTrigger } from "@heroui/react";

import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const navigate = useNavigate();

    const [isBookmarked, setIsBookmarked] = useState(false);

    // Toggle the bookmarked state
    const handleBookmarkClick = () => {
        setIsBookmarked((prev) => !prev);
    };


    const animals = [
        { key: "cat", label: "Cat" },
        { key: "dog", label: "Dog" },
        { key: "elephant", label: "Elephant" },
        { key: "lion", label: "Lion" },
        { key: "tiger", label: "Tiger" },
        { key: "giraffe", label: "Giraffe" },
        { key: "dolphin", label: "Dolphin" },
        { key: "penguin", label: "Penguin" },
        { key: "zebra", label: "Zebra" },
        { key: "shark", label: "Shark" },
        { key: "whale", label: "Whale" },
        { key: "otter", label: "Otter" },
        { key: "crocodile", label: "Crocodile" },
    ];


    return (
        <div>
            <Header />
            <div>
                {/* Hero Section */}
                <section className="w-full py-10 flex justify-center ">
                    <div className=" flex gap-5 items-baseline w-[900px] space-y-4 px-4">
                        <Input
                            type="text"
                            placeholder="Search for jobs..."
                            className="w-full"
                        />
                        <Select autoFocus size='xs' className="max-w-xs" >
                            {animals.map((animal) => (
                                <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                </section>


                {/* Job Section */}
                <section className="w-full flex justify-center">
                    <div className=" w-[1477px] flex gap-8">
                        <div className="w-2/5 p-4">
                            <div className='flex flex-col gap-5'>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card bordered isHoverable className="cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">
                                                Ingénieur d'Etat 1er grade - echelle 11
                                            </h3>
                                            {/* Optional icon placeholder */}
                                            <div className="icon"></div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="flex justify-between items-center">
                                            <p className="text-small text-default-500">
                                                Nombre de postes : 8
                                            </p>
                                            <p className="text-small text-default-500">
                                                Terminé le : Lundi 13 Janvier 2025
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>

                            </div>
                        </div>

                        <div className="w-3/5 p-4">
                            <Card className="h-full p-4">
                                <CardHeader>
                                    <div className='w-full flex justify-between items-center'>
                                        <h3 className="text-2xl font-bold text-gray-800">Détail de l'annonce</h3>
                                        <Button color="primary" variant="solid" className="text-sm font-semibold">
                                            Déposer votre Candidature
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="space-y-5">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Spécialité </h4>
                                            <ul className="list-disc pl-5 space-y-2 text-base text-gray-600">
                                                <li>Génie civil</li>
                                                <li>Ingénieur Systèmes d'information (SI)</li>
                                                <li>Ingénieur Business Intelligence (BI)</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Grade </h4>
                                            <p className="text-base text-gray-600">Ingénieur d'État 1er grade - échelle 11</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Type de recrutement </h4>
                                            <p className="text-base text-gray-600">Recrutement régulier</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Date de Publication </h4>
                                            <p className="text-base text-gray-600">23 Janvier 2025</p>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className='w-full flex flex-wrap justify-between'>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-semibold text-gray-500">
                                                Avis de Concours
                                            </span>
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                color="primary"
                                                className="ml-2"
                                            >
                                                <FaDownload className="h-4 w-5 text-primary" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-semibold text-gray-500">
                                                Liste de Candidates convoquer au concours
                                            </span>
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                color="primary"
                                                className="ml-2"
                                            >
                                                <FaDownload className="h-4 w-5 text-primary" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-semibold text-gray-500">
                                                Liste de Candidates concours Oral
                                            </span>
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                color="primary"
                                                className="ml-2"
                                            >
                                                <FaDownload className="h-4 w-5 text-primary" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm font-semibold text-gray-500">
                                                Liste definitifs Candidates 
                                            </span>
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="light"
                                                color="primary"
                                                className="ml-2"
                                            >
                                                <FaDownload className="h-4 w-5 text-primary" />
                                            </Button>
                                        </div>

                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </div>
    );
};

