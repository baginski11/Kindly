import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProgressBar from './progressBar/progressBar'


export default function BookSlider() {
  return (
    <Carousel className="w-full max-w-lg" opts={{
        align: "start",
        loop: true
      }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 ">
            <div className="p-1">
              <Card className='h-[200px]'>
                <CardContent className="flex flex-col !pl-3 pt-3">
                    <CardHeader className='!m-0 !p-0'>Robinhood</CardHeader>
                    <ProgressBar progressPercent={index * 10}></ProgressBar>
                  <span className="text-xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
