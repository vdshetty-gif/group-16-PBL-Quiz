// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: " Which of the following rule is used in the bilinear transformation?",
    answer: "Trapezoidal rule",
    options: [
      "Simpson’s rule",
      "Backward difference",
      "Forward difference",
      "Trapezoidal rule"
    ]
  },
    {
    numb: 2,
    question: "The transformation technique in which there is one to one mapping from s-domain to z-domain is",
    answer: "Bilinear transformation method",
    options: [
      "Approximation of derivatives",
      "Impulse invariance method",
      "Bilinear transformation method",
      "Backward difference for the derivative"
    ]
  },
    {
    numb: 3,
    question: "In bilinear transformation, the left-half s-plane is mapped to which of the following in the z-domain?",
    answer: "Partially inside the unit circle |z|=1",
    options: [
      "Entirely outside the unit circle |z|=1",
      "Partially outside the unit circle |z|=1",
      "Partially inside the unit circle |z|=1",
      "Entirely inside the unit circle |z|=1"
    ]
  },
    {
    numb: 4,
    question: "Calculate order of the Analog Chebyshev filter for the following specification Ωp=10 rad/sec, Ω =30rad/sec, Ap = 1dB, As =50 dB",
    answer: "5",
    options: [
      "3",
      "5",
      "6",
      "8"
    ]
  },
    {
    numb: 5,
    question: "Determine type of filter based on following specification Ap=3dB ωp =0.5π As=15dB ωs=0.75π",
    answer: "Low Pass Filter",
    options: [
      "High Pass Filter",
      "Low Pass Filter",
      "Band Pass",
      "Band Stop"
    ]
  },

  {
    numb: 6,
    question: "Determine pole and stability of Chebyshev filter with following characteristics: • Acceptance pass band ripple of 2db • Cut-off radian frequency of 1rad/sec • Stop band attenuation of 20db or greater beyond 1.3rad/sec",
    answer: "-0.25 - j0.4, Stable",
    options: [
      "0.25 - j0.4, Stable",
      "-0.25 - j0.4, Stable",
      "-0.25 - j0.4, Unstable",
      "0.25 - j0.4, Unstable"
    ]
  },

  {
    numb: 7,
    question: "Why Butterworth method is used more often",
    answer: "the passband of the filter has a smooth and monotonically decreasing frequency response       ",
    options: [
      "achieves this pass band flatness at the expense of a wide transition band",
      "the passband of the filter has a smooth and monotonically decreasing frequency response",
      "roll-off between the passband and stopband",
      "ripple at the passband"
    ]
  },

  {
    numb: 8,
    question: "What is the Butterworth polynomial of order 1?",
    answer: "s+1",
    options: [
      "s-1",
      "s+1",
      "s",
      "none of the mentioned"
    ]
  },

  {
    numb: 9,
    question: "Butterworth filter has _______.",
    answer: "No ripple",
    options: [
      "Ripple",
      "No ripple",
      "Ripple only at the top",
      "None of these"
    ]
  },

  {
    numb: 10,
    question: "A digital LPF is to he designed for following specifications- Passband ripple(Ap) <1db, Stopband ripple (As) >=40db, Passband edge(Fp) = 4Khz , Stopband edge(Fs)=6Khz, Sampling rate(Fsamp) = 24Khz .Compare the above parameters for Butterworth and Chebyshev filters and choose appropriate option",
    answer: "Order of Butterworth is greater than Chebyshev",
    options: [
      "Order of Butterworth is greater than Chebyshev",
      "Order of Chebyshev is greater than Butterworth",
      "Order is equal to Butterworth",
      "Cannot be determined."
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];