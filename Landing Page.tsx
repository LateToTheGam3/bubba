import React from 'react';
import Link from 'next/link';
import { Button } from './button/button';


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100">
            <header className="p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-purple-800">FashionFusion</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/browse" className="text-purple-800 hover:text-purple-600">Browse</Link></li>
                        <li><Link href="/designer/register" className="text-purple-800 hover:text-purple-600">Sell</Link></li>
                        <li><Link href="/about" className="text-purple-800 hover:text-purple-600">About</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-5xl font-bold text-purple-900 mb-6">Discover Unique Fashion</h2>
                <p className="text-xl text-purple-800 mb-8">Connect with boutique designers and find one-of-a-kind pieces</p>
                <div className="flex justify-center space-x-4">
                    <Button asChild>
                        <Link href="/browse">Start Shopping</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/designer/register">Become a Seller</Link>
                    </Button>
                </div>
            </main>
            <footer className="absolute bottom-0 w-full p-6 text-center text-purple-800">
                © 2023 FashionFusion. All rights reserved.
            </footer>
        </div>
    );
}