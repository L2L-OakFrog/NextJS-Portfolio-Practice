'use client';
import Hero from "@/components/ui/Hero";
import Loader from "@/components/ui/Loader";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// First, define the dynamic Loader component
/* const Loader = dynamic(() => import('@/components/ui/Loader'), {
  ssr: false,
  loading: () => <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse" />
}); */

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Then define DynamicBox which can now use the Loader
  const DynamicBox = dynamic(() => import('@/components/ui/DynamicBox'), {
    ssr: false,
    loading: () => (
      <div className="w-full flex items-center justify-center min-h-[300px]">
        <Loader type="circle-progress" size="xl" className="text-blue-500" />
      </div>
    )
  });

  if (!isMounted) {
    return (
      <div className="w-full flex items-center justify-center min-h-[300px]">
        <Loader type="ripple" size="lg" />
      </div>
    );
  }

  return (
    <DynamicBox as="main" className="w-full">
      <Hero />
    </DynamicBox>
  );
}