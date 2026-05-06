import Benefit from './components/Benefit';
import FeaturesSection from './components/Feature';
import Footer from '@/app/components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWork';
import Navbar from '@/app/components/Navbar';
import RegistrationSteps from './components/RegistrationStep';
import UserRolesSection from './components/UserRolesSection';

export default function Home() {
  return (
    <div className='bg-white overflow-hidden'>
      <Navbar />

      <main className="mx-auto max-w-[1220px] grow space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-right"><Benefit /></div>
        <div data-aos="fade-left"><HowItWorks /></div>
        <div data-aos="zoom-in"><FeaturesSection /></div>
        <div data-aos="fade-up"><UserRolesSection /></div>
        <div data-aos="fade-up"><RegistrationSteps /></div>
      </main>

      <Footer />
    </div>
  );
}