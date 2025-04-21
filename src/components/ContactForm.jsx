import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { FiSend } from "react-icons/fi"

import { useTheme } from "../hooks/useTheme"

export function ContactForm() {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });
    const formPlaceholders = t('FORM_PLACEHOLDERS', { returnObjects: true });
    const formButton = t('FORM_BUTTON', { returnObjects: true });
    const formErrorMessages = t('FORM_ERROR_MESSAGES', { returnObjects: true });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [, setValidationWarn] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        email: false,
        message: false
    })

    const borderColor = isDarkMode ? "border-stone-50/30" : "border-gray-500/50"

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        if (value.trim() !== "") {
            setFieldErrors(prev => ({
                ...prev,
                [name]: false
            }))
        }
    }

    const validate = () => {
        let isValid = true

        const newErrors = {
            name: false,
            email: false,
            message: false
        }

        if (!formData.name.trim()) {
            newErrors.name = true
            isValid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = true
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = true
            isValid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = true
            isValid = false
        }

        setFieldErrors(newErrors)
        return isValid
    }

    const handleInvalidFields = () => {
        setValidationWarn(true)

        toast.error(
            <p>
                {formErrorMessages.label01} <br />
                <b>{formErrorMessages.label02}</b>
            </p>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validate()) {
            handleInvalidFields()
            return
        }

        setIsSending(true)

        emailjs
            .send(
                "service_hkj022p",
                "template_lnhx6ul",
                formData,
                "2R-Q3NnkwtGoYSM6K"
            )
            .then((response) => {
                console.log("Response return", response)

                toast.success(`${formErrorMessages.label03}`)

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
            })
            .catch((error) => {
                console.log("Error sending message", error.message)

                toast.error(`${formErrorMessages.label04}`)
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (fieldErrors.name || fieldErrors.email || fieldErrors.message) {
                setFieldErrors({
                    name: false,
                    email: false,
                    message: false
                })
            }
        }, 5000)

        return () => clearTimeout(timer)
    }, [fieldErrors])

    return (
        <div id="contact" className="p-4 lg:w-3/4">
            <Toaster />

                <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                    {titles.get_in_touch}
                </h2>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder={formPlaceholders.name}
                            onChange={handleChange}
                            className={`mb-8 w-full appearance-none rounded-lg border px-3 py-2 text-sm focus:outline-none 
                                ${fieldErrors.name ? "border-rose-800 focus:border-rose-800" : `${borderColor} focus:border-stone-400`} bg-transparent`}
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder={formPlaceholders.email}
                            onChange={handleChange}
                            className={`mb-8 w-full appearance-none rounded-lg border px-3 py-2 text-sm focus:outline-none 
                                ${fieldErrors.email ? "border-rose-800 focus:border-rose-800" : `${borderColor} focus:border-stone-400`} bg-transparent`}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <textarea
                        type="message"
                        name="message"
                        value={formData.message}
                        placeholder={formPlaceholders.message}
                        onChange={handleChange}
                        className={`mb-8 w-full appearance-none rounded-lg border px-3 py-2 text-sm focus:outline-none 
                            ${fieldErrors.message ? "border-rose-800 focus:border-rose-800" : `${borderColor} focus:border-stone-400`} bg-transparent`}
                        rows="6"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className={`mb-8 w-full rounded border ${borderColor} bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 ${!isDarkMode ? "hover:bg-stone-300/30" : "hover:bg-stone-300"} ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? formButton.sending : formButton.send}
                        <FiSend />
                    </div>
                </button>
            </motion.form>
        </div>
    )
}