'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { FileDropzone } from '@/components/molecules/FileDropzone';
import { Check, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  serviceType: z.string().min(1, 'Please select a service'),
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().min(2, 'Project location is required'),
  squareFootage: z.string().optional(),
  description: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  company: z.string().optional(),
  preferredContact: z.enum(['email', 'phone']),
  timeline: z.string().min(1, 'Please select a timeline'),
});

export type QuoteFormData = z.infer<typeof formSchema>;

export const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: 'Structural Engineering',
      projectType: 'New Construction',
      preferredContact: 'email',
      timeline: 'ASAP',
      location: '',
      squareFootage: '',
      description: '',
      fullName: '',
      email: '',
      phone: '',
      company: '',
    },
  });

  const selectedService = watch('serviceType');
  const selectedProjectType = watch('projectType');
  const selectedContact = watch('preferredContact');

  const handleNextStep = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await trigger(['serviceType', 'projectType']);
    } else if (step === 2) {
      isValid = await trigger(['location']);
    } else if (step === 3) {
      isValid = true;
    }

    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        if (val) formData.append(key, val);
      });

      uploadedFiles.forEach((file) => {
        formData.append('files', file);
      });

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request.');
      }

      // QA Fix 2: Clear file state and form fields upon success
      setUploadedFiles([]);
      reset();
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try calling us at (747) 223-7815.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-6 sm:p-12 text-center flex flex-col items-center justify-center border border-gray-200 shadow-xl rounded-2xl">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EBF3FA] text-bd-blue rounded-full flex items-center justify-center mb-5 sm:mb-6 border border-[#4A8AB8]/30">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-bd-navy mb-3">
          Quote Request Received!
        </h3>
        <p className="font-body text-sm sm:text-base text-bd-gray max-w-md mb-6 sm:mb-8 leading-relaxed">
          Thank you for choosing Bid Dimensions. Our licensed engineering team is reviewing your plans and will respond with a detailed proposal within 10–12 days.
        </p>
        <div className="font-mono text-xs sm:text-sm text-bd-navy border border-[#4A8AB8]/30 bg-[#EBF3FA] px-5 py-3 rounded-xl mb-6 font-semibold">
          Urgent project? Call us directly: <a href="tel:7472237815" className="text-bd-blue underline hover:text-bd-navy">(747) 223-7815</a>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="font-mono text-xs text-bd-gray hover:text-bd-navy uppercase tracking-wider underline font-semibold transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const stepsList = ['Service', 'Details', 'Upload Plans', 'Contact Info'];

  return (
    <div className="bg-white p-6 sm:p-10 border border-gray-200 shadow-xl rounded-2xl relative">
      {/* Progress Bar Header */}
      <div className="mb-6 sm:mb-8 border-b border-gray-200 pb-5 sm:pb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11px] sm:text-xs text-bd-blue uppercase tracking-widest font-semibold">
            Step {step} of 4 — {stepsList[step - 1]}
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-bd-gray font-semibold">
            {Math.round((step / 4) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-[#EBF3FA] rounded-full relative overflow-hidden">
          <motion.div
            className="h-full bg-bd-blue rounded-full"
            initial={{ width: '25%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div>
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-bd-navy block mb-3">
                  1. Select Primary Engineering Service *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    'Structural Engineering',
                    'Architectural Design',
                    'MEP Engineering',
                    'Cost Estimation',
                    'Multiple Services',
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setValue('serviceType', service)}
                      className={`p-3.5 sm:p-4 text-left font-display font-medium text-xs sm:text-sm border rounded-xl transition-all flex items-center justify-between ${
                        selectedService === service
                          ? 'border-bd-blue bg-[#EBF3FA] text-bd-navy font-bold shadow-xs'
                          : 'border-gray-200 bg-[#F8FAFC] text-bd-charcoal hover:border-bd-blue/50 hover:bg-white'
                      }`}
                    >
                      <span>{service}</span>
                      {selectedService === service && <Check className="w-4 h-4 text-bd-blue shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-xs font-semibold uppercase tracking-wider text-bd-navy block mb-3">
                  2. Select Project Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {['New Construction', 'Renovation', 'Addition', 'Other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setValue('projectType', type)}
                      className={`p-2.5 sm:p-3 text-center font-body text-xs border rounded-lg transition-all ${
                        selectedProjectType === type
                          ? 'border-bd-navy bg-bd-navy text-white font-semibold shadow-xs'
                          : 'border-gray-200 bg-[#F8FAFC] text-bd-gray hover:text-bd-navy hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 sm:gap-5"
            >
              <Input
                label="Project Location (City, State or Address)"
                placeholder="e.g. Los Angeles, CA"
                required
                variant="light"
                error={errors.location?.message}
                {...register('location')}
              />

              <Input
                label="Approximate Square Footage (Optional)"
                type="number"
                placeholder="e.g. 3500"
                variant="light"
                {...register('squareFootage')}
              />

              <Input
                label="Brief Project Scope / Notes (Optional)"
                type="textarea"
                placeholder="Tell us about your project requirements..."
                variant="light"
                {...register('description')}
              />
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              <FileDropzone
                files={uploadedFiles}
                onFilesSelected={(newFiles) =>
                  setUploadedFiles((prev) => [...prev, ...newFiles])
                }
                onRemoveFile={(index) =>
                  setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
                }
              />
            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  required
                  variant="light"
                  error={errors.fullName?.message}
                  {...register('fullName')}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  required
                  variant="light"
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 000-0000"
                  required
                  variant="light"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
                <Input
                  label="Company / Organization (Optional)"
                  placeholder="ABC Construction"
                  variant="light"
                  {...register('company')}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div>
                  <label className="font-mono text-xs font-semibold uppercase tracking-wider text-bd-navy block mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-2">
                    {['email', 'phone'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setValue('preferredContact', method as 'email' | 'phone')}
                        className={`flex-1 py-2.5 text-center text-xs font-mono uppercase border rounded-lg transition-all ${
                          selectedContact === method
                            ? 'border-bd-navy bg-bd-navy text-white font-bold shadow-xs'
                            : 'border-gray-200 bg-[#F8FAFC] text-bd-gray hover:text-bd-navy hover:border-gray-300'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs font-semibold uppercase tracking-wider text-bd-navy block mb-2">
                    Project Timeline
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full bg-[#F8FAFC] border border-gray-300 text-bd-navy text-xs font-mono py-2.5 px-3 rounded-lg focus:outline-none focus:border-bd-blue focus:ring-2 focus:ring-bd-blue/20"
                  >
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1–2 Weeks</option>
                    <option value="1 month">1 Month</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {submitError && (
                <div className="text-red-600 text-xs font-mono p-3 bg-red-50 border border-red-200 rounded-lg">
                  {submitError}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Navigation Controls */}
        <div className="flex items-center justify-between pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="flex items-center gap-2 font-mono text-xs uppercase text-bd-gray hover:text-bd-navy font-semibold transition-colors py-2 px-3"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          ) : <div />}

          {step < 4 ? (
            <Button variant="primary" size="md" onClick={handleNextStep}>
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Get My Free Quote</span>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
