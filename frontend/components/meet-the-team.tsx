import Image from 'next/image';

import TeamMemberImage01 from '@/public/images/david_96.png';
import TeamMemberImage02 from '@/public/images/jaydin_96.png';
import TeamMemberImage03 from '@/public/images/amanda_96.png';
import TeamMemberImage04 from '@/public/images/grant_96.png';

export default function MeetTheTeam() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Learn more about the talented individuals who make up our team and drive our success.</p>
          </div>

          {/* Team Members */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

            {/* 1st team member */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMemberImage01} width={48} height={48} alt="Team Member 01" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow"> - Spartahacks is an amazing experience! I learned a ton about new fremeworks and technologies along with my amazing team. We are the best no doubt!
               </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">David G.</cite> - <span className="text-purple-600">Backend Dev</span>
              </div>
            </div>

            {/* 2nd team member */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMemberImage02} width={48} height={48} alt="Team Member 02" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">  — Spartahacks was undoubtedly my most successful hackathon to date. A huge shoutout to my incredible team; I couldn't have came close without them.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jaydin F.</cite> - <span className="text-purple-600"> Frontend Dev</span>
              </div>
            </div>

            {/* 3rd team member */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMemberImage03} width={48} height={48} alt="Team Member 03" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— AMANDA TO DO</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Alex Johnson</cite> - <span className="text-purple-600">Project Manager</span>
              </div>
            </div>

            {/* 4th team member */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TeamMemberImage04} width={48} height={48} alt="Team Member 04" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— GRANT TODO</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Emily Brown</cite> - <span className="text-purple-600">QA Engineer</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
