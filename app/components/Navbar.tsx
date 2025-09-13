'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Home,
    Image as ImageIcon,
    Video,
    WandSparkles,
    Pencil,
    Folder,
    Headphones,
    Sun,
    Moon,
    Bell,
    FileImage,
    DraftingCompass,
    ChevronDown,
    Menu,
    X,
} from 'lucide-react';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const menuItems = [
        {
            name: 'Home',
            link: '/',
            icon: Home,
        },
        {
            name: 'Image',
            link: '/image',
            icon: ImageIcon,
        },
        {
            name: 'Video',
            link: '/video',
            icon: Video,
        },
        {
            name: 'Enhancer',
            link: '/enhancer',
            icon: WandSparkles,
        },
        {
            name: 'Realtime',
            link: '/realtime',
            icon: DraftingCompass,
        },
        {
            name: 'Edit',
            link: '/edit',
            icon: Pencil,
        },
        {
            name: 'Folder',
            link: '/folder',
            icon: Folder,
        },
    ];

    // Initialize dark mode from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        setIsDark(shouldBeDark);
        
        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className={`w-full px-4 py-3 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} relative z-50`}>
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                {/* Left side - Logo */}
                <div className='flex items-center flex-shrink-0'>
                    <Image
                        src="/krealogo.svg"
                        alt="Krea Logo"
                        className='mr-4 filter brightness-0 dark:brightness-0 dark:invert'
                        width={24}
                        height={24}
                    />                
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-50 font-medium text-sm max-w-32 truncate">benevolentrimbobat</span>
                    <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-50 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200" />
                </div>    

                {/* Center Navigation */}
                <div className='hidden lg:flex flex-1 justify-center'>
                    <div className='flex items-center bg-gray-200 dark:bg-gray-800 rounded-2xl px-3 py-2 space-x-2'>
                        {menuItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className={`px-3 py-2 rounded-xl transition-colors duration-200 hover:scale-105 transform ${
                                        pathname === item.link
                                        ? 'bg-white dark:bg-gray-600 shadow-sm'
                                        : 'hover:bg-gray-300 dark:hover:bg-gray-700'    
                                    }`}
                                    title={item.name}
                                >
                                    <IconComponent
                                        className='w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200'
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>


                {/* Right side - Desktop Only */}
                <div className='hidden lg:flex items-center space-x-3 flex-shrink-0'>
                    {/* Gallery */}
                    <Link 
                        href='/gallery' 
                        className='flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200'
                    >
                        <FileImage className='w-4 h-4 text-gray-700 dark:text-gray-50'/>
                        <span className='text-sm text-gray-700 dark:text-gray-50'>Gallery</span>
                    </Link>

                    {/* Support */}
                    <Link 
                        href="/support" 
                        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        <Headphones className="w-4 h-4 text-gray-700 dark:text-gray-50" />
                        <span className="text-sm text-gray-700 dark:text-gray-50">Support</span>
                    </Link>

                    {/* Notification */}
                    <button className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                        <Bell className="w-4 h-4 text-gray-700 dark:text-gray-50" />
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className='p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200'
                        title='Toggle Dark Mode'
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className='w-4 h-4 text-gray-700 dark:text-gray-300'/>
                        ) : (
                            <Moon className='w-4 h-4 text-gray-700 dark:text-gray-300'/>
                        )}
                    </button>

                    {/* Profile avatar */}
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full flex-shrink-0 cursor-pointer hover:scale-110 transform transition-transform duration-200">
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Navbar;