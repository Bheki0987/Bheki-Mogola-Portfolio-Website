import React, { useState } from 'react';
import { BLOG_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<typeof BLOG_DATA[0] | null>(null);

    return (
        <section className="min-h-screen py-24 relative bg-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-4 transition-colors">
                            <ChevronLeft size={20} /> Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Insights & Updates</h1>
                        <p className="text-neutral-400 max-w-xl text-lg">
                            Thoughts on technology, project updates, and data analysis trends. All articles in one place.
                        </p>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_DATA.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedPost(post)}
                            className="group bg-neutral-950 border border-neutral-800 hover:border-white transition-all duration-300 cursor-pointer flex flex-col h-full rounded-sm overflow-hidden"
                        >
                            {post.image && (
                                <div className="h-48 overflow-hidden relative border-b border-neutral-800">
                                    <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                    />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4 font-mono">
                                    <Calendar size={12} />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-neutral-900 flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-500 border border-neutral-800 px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-neutral-950 border border-neutral-800 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl rounded-sm"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 bg-white text-black hover:bg-neutral-200 transition-colors z-10 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {selectedPost.image && (
                                <div className="h-64 md:h-80 w-full relative">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                                </div>
                            )}

                            <div className="p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
                                        {selectedPost.tags[0]}
                                    </span>
                                    <span className="text-neutral-400 text-sm font-mono border-l border-neutral-700 pl-4">
                                        {selectedPost.date}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                    {selectedPost.title}
                                </h2>

                                <div className="prose prose-invert prose-neutral max-w-none">
                                    {selectedPost.content.split('\n').map((paragraph, i) => (
                                        <p key={i} className="text-neutral-300 leading-relaxed mb-4 text-lg font-light">
                                            {paragraph}
                                        </p>
                                    ))}

                                    {selectedPost.gallery && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                            {selectedPost.gallery.map((img, i) => (
                                                <div key={i} className="rounded-lg overflow-hidden border border-neutral-800">
                                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BlogPage;
