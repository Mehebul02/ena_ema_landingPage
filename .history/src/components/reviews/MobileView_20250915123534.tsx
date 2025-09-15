/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star } from 'lucide-react';
import React from 'react';
import * as Avatar from "@radix-ui/react-avatar"
const MobileView = ({ testimonials, currentIndex }:any) => {
    return (
           <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial:any) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mx-auto max-w-md hover:bg-slate-750 transition-colors">
                    {/* Stars */}
                    <div className="pb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-4">
                      <blockquote className="text-slate-200 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="pt-0">
                      <div className="flex items-center gap-3">
                        <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-slate-700">
                          <Avatar.Image
                            className="h-full w-full rounded-[inherit] object-cover"
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                          <Avatar.Fallback className="text-slate-200 leading-1 flex h-full w-full items-center justify-center bg-slate-700 text-sm font-medium">
                            {testimonial.name
                              .split(" ")
                              .map((n:any) => n[0])
                              .join("")}
                          </Avatar.Fallback>
                        </Avatar.Root>
                        <div>
                          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                          <div className="text-slate-400 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
    );
};

export default MobileView;