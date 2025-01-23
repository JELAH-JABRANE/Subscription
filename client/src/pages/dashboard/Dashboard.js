import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import { Footer } from '../../components/Footer/Footer';
import { DropdownTrigger, Input } from "@heroui/react";

import { FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Dropdown, Button, DropdownMenu, DropdownItem, ropdownTrigger } from "@heroui/react";

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
            <div>
                {/* Hero Section */}
                <section className="w-full py-10 flex justify-center ">
                    <div className="w-full flex gap-5 items-baseline w-[500px] space-y-4 px-4">
                        <Input
                            type="text"
                            placeholder="Search for jobs..."
                            className="w-full"
                        />
                        <Dropdown >
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="w-full"
                                >
                                    Select Category
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Job Categories">
                                <DropdownItem key="development">Development</DropdownItem>
                                <DropdownItem key="design">Design</DropdownItem>
                                <DropdownItem key="marketing">Marketing</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </section>


                {/* Job Section */}
                <section className="w-full">
                    <div className=" w-[1477px] flex">
                        <div className="w-2/5 p-4">
                            <Card isHoverable className="cursor-pointer">
                                <CardHeader className="flex gap-3">

                                    <div className="flex flex-col">
                                        <p className="text-md font-semibold">Adjoint technique 2ème grade
                                        </p>
                                        <p className="text-small text-default-500">heroui.com</p>
                                    </div>
                                </CardHeader>


                            </Card>
                        </div>

                        <div className="w-3/5 p-4">
                            <Card className="h-full">
                                <CardBody>
                                    <h3 className="text-xl font-semibold mb-4">Détail de l'annonce
                                    </h3>
                                    <div className="space-y-4">
                                        <p className="text-default-500">
                                            We are looking for a Frontend Developer to join our team...
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">Requirements:</h4>
                                            <ul className="list-disc pl-4 space-y-1">
                                                <li>3+ years of experience with React</li>
                                                <li>Strong understanding of modern JavaScript</li>
                                                <li>Experience with responsive design</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

