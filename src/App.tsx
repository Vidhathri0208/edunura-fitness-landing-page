/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsFitness } from './components/WhatIsFitness';
import { WhyFitness } from './components/WhyFitness';
import { HealthyWeightTable } from './components/HealthyWeightTable';
import { BodyTypeTraining } from './components/BodyTypeTraining';
import { Nutrition } from './components/Nutrition';
import { TrainingDeepDive } from './components/TrainingDeepDive';
import { ConsistencyKeys } from './components/ConsistencyKeys';
import { FAQ } from './components/FAQ';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsFitness />
      <WhyFitness />
      <HealthyWeightTable />
      <BodyTypeTraining />
      <Nutrition />
      <TrainingDeepDive />
      <ConsistencyKeys />
      <FAQ />
      <Registration />
      <Footer />
    </>
  );
}
