import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import ProjectDetailView from '@/app/components/ProjectDetailView';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <ProjectDetailView project={project} />
    );
}
