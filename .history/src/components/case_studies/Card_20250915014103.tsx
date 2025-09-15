import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Card = ({study}) => {
    return (
          <div key={study.id} className="w-1/2 flex-shrink-0 px-4">
                                    <div className="bg-[#192420] backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 h-full min-h-[280px] p-8 rounded-2xl">
                                        {/* Laptop Mockup */}
                                        <div className="relative mb-8">
                                            <div className="bg-white rounded-b-xl overflow-hidden rounded-2xl">
                                                <Image
                                                    src={study.image || "/placeholder.svg"}
                                                    alt={study.title}
                                                    width={600}
                                                    height={600}
                                                    className="w-full h-80 object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                                            <p className="text-gray-300">{study.subtitle}</p>
                                        </div>

                                        {/* Metrics */}
                                        <div className="space-y-3">
                                            {study.metrics.map((metric, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="bg-green-500 rounded-full p-1">
                                                        <Check className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-gray-300">{metric}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
    );
};

export default Card;