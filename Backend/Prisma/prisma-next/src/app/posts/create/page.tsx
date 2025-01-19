'use client'

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { createPost } from '@/actions/actions';

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Title is required'
    }),
    content: z.string()
})

export default function CreatePostPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: ''
        }
    })

    // Handle form submission
    const onSubmit = async (values) => {
        await createPost(values);
    }

    return (
        <main className="flex flex-col items-center min-h-screen justify-between p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="content" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Create Post</Button>
                </form>
            </Form>
        </main>
    );
}