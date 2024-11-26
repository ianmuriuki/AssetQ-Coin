import { Shield, Globe, Coins, Cpu } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Ownership',
    description: 'Immutable asset records secured by the Internet Computer Protocol.'
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: "Trade assets from anywhere in the world with ICP's global infrastructure."
  },

  {
    icon: Coins,
    title: 'Low Fees',
    description: 'Efficient and cost-effective transactions powered by AssetQ.'
  },
  {
    icon: Cpu,
    title: 'ICP Integration',
    description: 'Built on the Internet Computer for unmatched scalability and security.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose AssetQ?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Built on ICP for maximum security and efficiency
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}