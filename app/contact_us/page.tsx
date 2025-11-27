"use client";

import Link from 'next/link';
import Nav from '../components/Nav';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
	const [result, setResult] = useState("");

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();
	const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "64bcaec9-f2e0-47bf-8bef-e1bf13413454");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    };

	return (
		<>
			<Nav />
			<main className="min-h-screen flex items-center justify-center bg-app-background text-app-foreground">
				<div className="max-w-3xl w-full p-12">
					<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
					<p className="text-stone-700 mb-6">Thanks for your interest — drop us a message and we'll get back to you.</p>

					<form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
						<div>
							<label className="block text-sm font-medium text-stone-700">Name</label>
							<input name="name" type="text" required className="mt-1 block w-full border border-stone-200 rounded px-3 py-2" />
						</div>

						<div>
							<label className="block text-sm font-medium text-stone-700">Email</label>
							<input name="email" type="email" required className="mt-1 block w-full border border-stone-200 rounded px-3 py-2" />
						</div>
                        
                        <div>
							<label className="block text-sm font-medium text-stone-700">Phone</label>
							<input name="phone" type="phone" required className="mt-1 block w-full border border-stone-200 rounded px-3 py-2" />
						</div>

						<div>
							<label className="block text-sm font-medium text-stone-700">Message</label>
							<textarea name="message" required className="mt-1 block w-full border border-stone-200 rounded px-3 py-2 h-32" />
						</div>

						<div className="flex items-center justify-between">
							<button type="submit" className="bg-stone-900 text-white px-4 py-2 rounded">Send</button>
							<Link href="/" className="text-sm text-stone-600">Back home</Link>
						</div>
                        <span>{result}</span>
					</form>
				</div>
			</main>
		</>
	);
}
