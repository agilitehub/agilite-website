import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock form submission - replace with actual API call in production
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    // Show success message to user (would be implemented with proper state management)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id='contact' className='py-20 bg-white dark:bg-agilite-black'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-agilite-slate dark:text-white mb-4'>Get In Touch</h2>
          <p className='text-xl text-agilite-slate dark:text-white max-w-3xl mx-auto'>
            Have questions about our services? Reach out to us and we'll be happy to assist you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start space-x-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-agilite-red/10 dark:bg-agilite-red/20 flex items-center justify-center'>
                <FontAwesomeIcon icon={faEnvelope} className='h-5 w-5 text-agilite-red' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-agilite-slate dark:text-white mb-1'>Email</h3>
                <p className='text-agilite-slate dark:text-white'>info@agilite.io</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-agilite-red/10 dark:bg-agilite-red/20 flex items-center justify-center'>
                <FontAwesomeIcon icon={faPhone} className='h-5 w-5 text-agilite-red' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-agilite-slate dark:text-white mb-1'>Phone</h3>
                <p className='text-agilite-slate dark:text-white'>+27 86 101 7444</p>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-agilite-red/10 dark:bg-agilite-red/20 flex items-center justify-center'>
                <FontAwesomeIcon icon={faLocationDot} className='h-5 w-5 text-agilite-red' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-agilite-slate dark:text-white mb-1'>Location</h3>
                <p className='text-agilite-slate dark:text-white'>
                  Building B, First Floor, Bondev Office Park
                  <br />
                  120 Cattle Egret Road
                  <br />
                  Zwartkops, Pretoria, Gauteng 0157
                  <br />
                  South Africa
                </p>
              </div>
            </div>

            <div className='bg-agilite-grey-light dark:bg-secondary-light p-6 rounded-lg'>
              <h3 className='text-lg font-semibold text-agilite-slate dark:text-white mb-4'>Business Hours</h3>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <p className='text-agilite-slate dark:text-white'>Monday - Friday:</p>
                  <p className='text-agilite-slate dark:text-white font-medium'>9:00 AM - 6:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-agilite-slate dark:text-white'>Saturday:</p>
                  <p className='text-agilite-slate dark:text-white font-medium'>Closed</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-agilite-slate dark:text-white'>Sunday:</p>
                  <p className='text-agilite-slate dark:text-white font-medium'>Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-agilite-grey-light dark:bg-secondary-light p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-agilite-slate dark:text-white mb-6'>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-agilite-slate dark:text-white mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-agilite-grey-light dark:border-secondary-DEFAULT rounded-md bg-white dark:bg-agilite-black text-agilite-slate dark:text-white focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-agilite-slate dark:text-white mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-agilite-grey-light dark:border-secondary-DEFAULT rounded-md bg-white dark:bg-agilite-black text-agilite-slate dark:text-white focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-agilite-slate dark:text-white mb-1'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-agilite-grey-light dark:border-secondary-DEFAULT rounded-md bg-white dark:bg-agilite-black text-agilite-slate dark:text-white focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-agilite-slate dark:text-white mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-agilite-grey-light dark:border-secondary-DEFAULT rounded-md bg-white dark:bg-agilite-black text-agilite-slate dark:text-white focus:ring-2 focus:ring-agilite-red focus:border-transparent'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-agilite-red hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agilite-red'
              >
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} className='h-4 w-4' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
