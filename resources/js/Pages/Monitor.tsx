import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination"

export default function Monitor() {

    const data = [
        {
            name: "John Doe",
            age: 8,
            height: "130cm",
            weight: "28kg",
            status: "Normal"
        },
        {
            name: "Jane Smith",
            age: 7,
            height: "125cm",
            weight: "26kg",
            status: "Normal"
        },
        {
            name: "Mike Brown",
            age: 9,
            height: "135cm",
            weight: "32kg",
            status: "Overweight"
        },
        {
            name: "Sarah Wilson",
            age: 6,
            height: "118cm",
            weight: "22kg",
            status: "Underweight"
        },
        {
            name: "Emily Chen",
            age: 8,
            height: "128cm",
            weight: "27kg",
            status: "Normal"
        },
        {
            name: "Lucas Garcia",
            age: 7,
            height: "122cm",
            weight: "21kg",
            status: "Underweight"
        },
        {
            name: "Sophia Lee",
            age: 9,
            height: "138cm",
            weight: "35kg",
            status: "Overweight"
        },
        {
            name: "Oliver Kim",
            age: 8,
            height: "132cm",
            weight: "29kg",
            status: "Normal"
        },
        {
            name: "Emma Davis",
            age: 7,
            height: "127cm",
            weight: "25kg",
            status: "Normal"
        },
        {
            name: "Aiden Taylor",
            age: 9,
            height: "140cm",
            weight: "36kg",
            status: "Overweight"
        },
        {
            name: "Isabella Martinez",
            age: 8,
            height: "131cm",
            weight: "28kg",
            status: "Normal"
        },
        {
            name: "William Park",
            age: 6,
            height: "120cm",
            weight: "21kg",
            status: "Underweight"
        }
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Monitor" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div className="relative">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="font-semibold">Name</TableHead>
                                            <TableHead className="font-semibold">Age</TableHead>
                                            <TableHead className="font-semibold">Height</TableHead>
                                            <TableHead className="font-semibold">Weight</TableHead>
                                            <TableHead className="font-semibold">Status</TableHead>
                                            <TableHead className="font-semibold">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data.map((item, index) => (
                                            <TableRow
                                                key={index}
                                                className="hover:bg-gray-50 transition-colors"
                                            >
                                                <TableCell className="font-medium">{item.name}</TableCell>
                                                <TableCell>{item.age} years</TableCell>
                                                <TableCell>{item.height}</TableCell>
                                                <TableCell>{item.weight}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded-full text-sm ${item.status === 'Normal' ? 'bg-green-100 text-green-800' :
                                                        item.status === 'Overweight' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                        }`}>
                                                        {item.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="hover:bg-gray-100"
                                                    >
                                                        View Details
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
