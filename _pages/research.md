---
layout: page
title: research
permalink: /research/
description: overview of my research and selected projects
nav: true
nav_order: 1
toc:
  sidebar: true
---

<!-- <iframe width="100%" height="800" src="/assets/pdf/research_overview.pdf"> -->

<!-- <img width="100%" height="500" src="/assets/img/.jpg"> -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research_overview.jpg" title="My research overview" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    An overview of my research for developing safe and explainable robots that interact with humans.
</div>

#### **NEURO-SYMBOLIC AI**

---

<div class="row">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/ral_iros2021.png" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm-8 mt-3 mb-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/al_stl.gif" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Left: Reward modeling and prediction via Gaussian processes and deep neural networks. Right: Extracted specification-consistent behaviors in simulations, including Nvidia Isaac.
</div>

##### _Learning reward functions and control policies that satisfy temporal-logic specifications_

Designing dense or "informative" reward functions for Reinforcement Learning (RL) is a highly non-trivial task. Errors in reward design can lead to unsafe and undesirable learned control behaviors. This work introduces a neurosymbolic learning-from-demonstrations (LfD) framework that uses high-level tasks expressed in Signal Temporal Logic (STL), and user demonstrations to extract reward functions and control policies via reinforcement learning. The LfD-STL framework enables an agent to learn non-Markovian/temporal rewards and overcome critical issues (safety and performance) with inverse reinforcement learning methods. The initial development of the framework was applied to discrete and deterministic environments, and was later generalized to continuous spaces and stochastic environments via Gaussian Processes and neural-network modeling.

##### _Learning to improve/extrapolate beyond demonstrator performance_

Generally, a machine learning model's performance is determined by the quality and amount of data it is trained on. Thus, noisy data and limited human demonstrations, which is widely observed in robotic settings, poses a challenge to learn optimal behaviors. This work on neuro-symbolic apprenticeship learning implements temporal logic-guided reinforcement learning from demonstrations to automatically improve robot safety and performance via self-monitoring and adaptation. The capabilities of the framework are exhibited on a variety of mobile navigation, fixed-base manipulation and mobile-manipulation tasks using the **Nvidia Isaac** simulator. This paper will be published in the proceedings of IROS 2024. Additional details can be found on the [supplemental document](https://aniruddh-puranic.info/assets/pdf/alstl_supp.pdf).

###### **References**

- {% reference PDN_ALSTL %}
- {% reference PDN21 %}
- {% reference PDN20 %}

#### **INTERPRETABLE/EXPLAINABLE AI (xAI)**

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/peglearn_graphs.jpg" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/peglearn_rewards.jpg" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/mining_stl.jpg" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Left: Generating graphs that explain demonstrator performance and formal specification conflicts. Center: Neural reward modeling from inferred graphs. Right: Mining formal specifications from time-series data.
</div>

##### _Generating explainable temporal logic graphs from human data_

Understanding and evaluating the human demonstrations and learned robot behaviors plays a critical role in optimizing the control policies for robots, without which, a robot may infer incorrect reward functions that lead to undesirable or unsafe control policies. The prior LfD-STL required the demonstrators to explicitly specify their preferences by ranking the STL specifications. The ranked specifications were represented by a directed acyclic graph (DAG) to capture the preferences and dependencies. To relax this manual burden, we automatically infer the specification DAG from demonstrations via our novel Performance Graph Learning (PeGLearn). PeGLearn facilitates explainability for AI-based systems via a user study on CARLA, a simulated driving environment. We also integrate human feedback (annotations) in a robot-assisted surgical domain to model behaviors of surgeons according to their expertise. Additional details can be found on the [supplemental document](https://aniruddh-puranic.info/assets/pdf/peglearn_supp.pdf).

##### _Learning (mining) specifications from temporal data_

Autonomous cyber-physical systems such as self-driving cars, unmanned aerial vehicles, general purpose robots, and medical devices can often be modeled as a system consisting of heterogeneous components. Understanding the high-level behavior of such components, especially equipped with deep learning, at an abstract, behavioral level is thus a significant challenge. Our work seeks to answer: _Given a requirement on the system output behaviors, what are the assumptions on the model environment, i.e., inputs to the model, that guarantee that the corresponding output traces satisfy the output requirement?_ We develop techniques involving decision-tree classifiers, counterexample-guided learning, optimization, enumeration and parameter mining to extract STL specifications that explain system behaviors.

###### **References**

- {% reference PDN23 %}
- {% reference HSCC20 %}
- {% reference ICCPS20 %}

#### **COMPUTER VISION**

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/tqtl.jpg" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/keck_2019.jpg" title="reward modeling" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Left: Generating graphs that explain demonstrator performance and formal specification conflicts. Center: Neural reward modeling from inferred graphs. Right: Mining formal specifications from time-series data.
</div>

##### _Evaluating the quality of vision-based perception algorithms_

Computer vision is one of the major perception components of a cyber-physical system with numerous applications in autonomous vehicles, industrial/factory robotics, medical devices, etc. Checking the correctness and ensuring robustness of perception algorithms such as those based on deep convolutional neural networks is a major challenge. Conventionally, perception algorithms are tested by comparing their performance to ground truth labels, that require a laborious annotation process. We propose the use of Timed Quality Temporal Logic (TQTL) as a formal language to express desirable spatio-temporal properties of a perception algorithm processing a video, offering an alternative metric that can provide useful information, even in the absence of ground truth labels.

##### _Vision-based metric for evaluating surgeon's performance_

Due to the lack of instrument force feedback during robot-assisted surgery, tissue-handling technique is an important aspect of surgical performance to assess. We develop a vision-based machine learning algorithm for object detection and distance prediction to measure needle entry point deviation in tissue during robotic suturing as a proxy for tissue trauma.

###### **References**

- {% reference DATE19 %}
- {% reference KECK19 %}
