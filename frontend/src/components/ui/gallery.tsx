"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface GalleryItem {
    _id: string;
    title: string;
    image: string;
    description: string;
    order?: number;
}

function Gallery({ 
    items,
    index,
    setIndex,
    setOpen
}: {
    items: GalleryItem[];
    index: number;
    setIndex: (index: number) => void;
    setOpen: (open: boolean) => void;
}) {
    // Safety check to ensure we're not working with an empty array
    if (!items || items.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">No gallery items available</p>
            </div>
        );
    }

    // Ensure our index is in bounds
    const safeIndex = Math.min(index, items.length - 1);
    
    // Create a safe copy for rendering - log the items being rendered for debugging
    const displayItems = items.slice(0, Math.min(11, items.length));
    console.log(`Gallery display items (${displayItems.length}):`, displayItems);
    
    return (
        <div className="rounded-md w-fit mx-auto md:gap-2 gap-1 flex pb-20 pt-10 overflow-x-auto max-w-[100vw] px-4">
            {displayItems.map((item, i) => (
                <motion.div
                    key={item._id}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-2xl ${
                        index === i
                            ? "w-[250px] sm:w-[250px]"
                            : "xl:w-[50px] md:w-[30px] sm:w-[20px] w-[14px]"
                    } h-[200px] sm:h-[200px] h-[150px] flex-shrink-0 overflow-hidden transition-[width] ease-in-out duration-300`}
                    onMouseEnter={() => setIndex(i)}
                    onMouseLeave={() => setIndex(i)}
                    onTouchStart={(e) => {
                        // Set index immediately on touch to fix first tap issue
                        setIndex(i);
                    }}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        setIndex(i);
                        // Small delay to ensure index is set before opening
                        setTimeout(() => setOpen(true), 10);
                    }}
                    layoutId={item._id}
                >
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            console.error("Failed to load gallery image:", item.image);
                            e.currentTarget.src = "/static/images/placeholder.jpg";
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default function GalleryComponent({ items = [] }: { items?: GalleryItem[] }) {
    const [index, setIndex] = useState(0)
    const [open, setOpen] = useState(false)
    
    // Make sure items is always an array
    const safeItems = Array.isArray(items) ? items : items ? [items] : [];
    
    // Log the items received for debugging
    useEffect(() => {
        console.log("Gallery component received items:", safeItems);
        if (safeItems.length > 0) {
            console.log("First gallery item:", safeItems[0]);
        }
    }, [safeItems]);

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.classList.remove("overflow-hidden")
        }
    }, [open])

    // If there are no items, show a placeholder
    if (safeItems.length === 0) {
        return (
            <div className="text-center py-4">
                <p className="text-gray-500">No gallery items available</p>
            </div>
        )
    }

    return (
        <div className="relative">
            <Gallery
                items={safeItems}
                index={index}
                setIndex={setIndex}
                setOpen={setOpen}
            />
            <AnimatePresence>
                {open !== false && safeItems.length > 0 && index < safeItems.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="dark:bg-black/40 bg-white/40 backdrop-blur-sm fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center p-4"
                        onClick={() => {
                            setOpen(false)
                        }}
                    >
                        <div onClick={(e) => e.stopPropagation()}>
                            <motion.div
                                layoutId={safeItems[index]._id}
                                className="w-full max-w-[400px] max-h-[90vh] rounded-2xl cursor-default"
                            >
                                <div className="relative w-full aspect-square max-h-[70vh]">
                                    <img
                                        src={safeItems[index].image}
                                        alt={safeItems[index].title}
                                        className="rounded-2xl h-full w-full object-cover"
                                        onError={(e) => {
                                            console.error("Failed to load gallery detail image:", safeItems[index].image);
                                            e.currentTarget.src = "/static/images/placeholder.jpg";
                                        }}
                                    />
                                </div>
                                <article className="dark:bg-base-dark bg-white rounded-md p-2 mt-2 border">
                                    <motion.h1
                                        initial={{ scaleY: 0.2 }}
                                        animate={{ scaleY: 1 }}
                                        exit={{ scaleY: 0.2 }}
                                        transition={{ duration: 0.2, delay: 0.2 }}
                                        className="text-xl font-semibold truncate"
                                    >
                                        {safeItems[index].title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ scaleY: -10, opacity: 0 }}
                                        transition={{ duration: 0.2, delay: 0.2 }}
                                        className="text-sm leading-[140%] py-2 max-h-[100px] overflow-y-auto"
                                    >
                                        {safeItems[index].description}
                                    </motion.p>
                                </article>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
