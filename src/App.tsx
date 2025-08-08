import React, { useState } from 'react';
import { Phone, Mail, MapPin, Users, Award, Activity, Heart, Stethoscope, Calendar, Clock, Star, QrCode, Guitar as Hospital, Ambulance, Shield, UserCheck } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const hospitalInfo = {
    name: "St. Mary's General Hospital",
    established: "1985",
    tagline: "Caring for Your Health with Excellence",
    description: "A leading healthcare institution providing comprehensive medical services with state-of-the-art facilities and compassionate care.",
    address: "123 Healthcare Boulevard, Medical City, MC 12345",
    phone: "(555) 123-CARE",
    email: "info@stmarysgeneral.com",
    beds: 250,
    departments: 15,
    staff: 180,
    emergencyServices: true
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      education: "MD, Harvard Medical School",
      image: "https://images.pexels.com/photos/559827/pexels-photo-559827.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
      patients: "2,500+",
      availability: "Mon-Fri 9AM-5PM"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurosurgery",
      experience: "20 years",
      education: "MD, Johns Hopkins University",
      image: "https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
      patients: "1,800+",
      availability: "Mon-Thu 8AM-6PM"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "12 years",
      education: "MD, Stanford University",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
      patients: "3,200+",
      availability: "Mon-Fri 8AM-4PM"
    },
    {
      id: 4,
      name: "Dr. Robert Williams",
      specialty: "Orthopedics",
      experience: "18 years",
      education: "MD, Mayo Clinic",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.7,
      patients: "2,100+",
      availability: "Tue-Sat 9AM-5PM"
    }
  ];

  const staff = [
    {
      id: 1,
      name: "Jennifer Adams",
      role: "Chief Nursing Officer",
      department: "Nursing",
      experience: "22 years",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      certifications: ["RN", "BSN", "MSN"]
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Head of Radiology",
      department: "Imaging",
      experience: "16 years",
      image: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      certifications: ["RT", "ARRT", "CT"]
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Laboratory Director",
      department: "Pathology",
      experience: "14 years",
      image: "https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      certifications: ["MLT", "MT", "PhD"]
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Pharmacy Manager",
      department: "Pharmacy",
      experience: "19 years",
      image: "https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      certifications: ["PharmD", "RPh", "BCPS"]
    }
  ];

  const equipment = [
    {
      id: 1,
      name: "MRI Scanner 3T",
      model: "Siemens Magnetom Vida",
      department: "Radiology",
      status: "Operational",
      yearInstalled: "2023",
      specifications: "3 Tesla magnetic field strength",
      maintenance: "Last serviced: Dec 2024"
    },
    {
      id: 2,
      name: "CT Scanner",
      model: "GE Revolution CT",
      department: "Imaging",
      status: "Operational",
      yearInstalled: "2022",
      specifications: "128-slice, low-dose imaging",
      maintenance: "Last serviced: Nov 2024"
    },
    {
      id: 3,
      name: "Cardiac Catheterization Lab",
      model: "Philips Azurion 7",
      department: "Cardiology",
      status: "Operational",
      yearInstalled: "2023",
      specifications: "Advanced imaging guidance",
      maintenance: "Last serviced: Dec 2024"
    },
    {
      id: 4,
      name: "Surgical Robot",
      model: "da Vinci Xi",
      department: "Surgery",
      status: "Operational",
      yearInstalled: "2021",
      specifications: "Minimally invasive surgery platform",
      maintenance: "Last serviced: Nov 2024"
    },
    {
      id: 5,
      name: "Ultrasound Systems",
      model: "Various Models",
      department: "Multiple",
      status: "Operational",
      yearInstalled: "2020-2024",
      specifications: "15 units across departments",
      maintenance: "Monthly service schedule"
    },
    {
      id: 6,
      name: "Digital X-Ray Systems",
      model: "Fujifilm FDR",
      department: "Radiology",
      status: "Operational",
      yearInstalled: "2022",
      specifications: "8 units, digital radiography",
      maintenance: "Quarterly service schedule"
    }
  ];

  // Generate QR code URL (using qr-server.com API)
  const websiteUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(websiteUrl)}`;

  const NavButton = ({ section, label, icon: Icon }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeSection === section
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-blue-700 hover:bg-blue-50 hover:text-blue-800'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, color = "blue" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className={`p-3 bg-${color}-100 rounded-lg`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Hospital className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{hospitalInfo.name}</h1>
                <p className="text-sm text-gray-600">{hospitalInfo.tagline}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <NavButton section="home" label="Home" icon={Hospital} />
              <NavButton section="doctors" label="Doctors" icon={Stethoscope} />
              <NavButton section="staff" label="Staff" icon={Users} />
              <NavButton section="equipment" label="Equipment" icon={Activity} />
              <NavButton section="contact" label="Contact" icon={Phone} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-around">
            <NavButton section="home" label="Home" icon={Hospital} />
            <NavButton section="doctors" label="Doctors" icon={Stethoscope} />
            <NavButton section="staff" label="Staff" icon={Users} />
            <NavButton section="equipment" label="Equipment" icon={Activity} />
            <NavButton section="contact" label="Contact" icon={Phone} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Excellence in Healthcare
                  </h2>
                  <p className="text-xl mb-6 text-blue-100">
                    {hospitalInfo.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="text-blue-200" size={20} />
                      <span>Established {hospitalInfo.established}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="text-blue-200" size={20} />
                      <span>Accredited Facility</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                    alt="Hospital Building"
                    className="rounded-xl shadow-2xl mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Hospital Statistics */}
            <div className="grid md:grid-cols-4 gap-6">
              <StatCard icon={Hospital} label="Total Beds" value={hospitalInfo.beds} />
              <StatCard icon={Users} label="Medical Staff" value={hospitalInfo.staff} color="green" />
              <StatCard icon={Activity} label="Departments" value={hospitalInfo.departments} color="purple" />
              <StatCard icon={Ambulance} label="Emergency Care" value="24/7" color="red" />
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <QrCode className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Quick Access QR Code</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Scan this QR code with your mobile device to quickly access our hospital information
                </p>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <img
                      src={qrCodeUrl}
                      alt="Hospital QR Code"
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  QR Code URL: {websiteUrl}
                </p>
              </div>
            </div>

            {/* Quick Services */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="text-red-500 mb-4" size={32} />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Emergency Services</h4>
                <p className="text-gray-600">24/7 emergency care with rapid response team</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Calendar className="text-blue-500 mb-4" size={32} />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Appointment Booking</h4>
                <p className="text-gray-600">Easy online appointment scheduling system</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <UserCheck className="text-green-500 mb-4" size={32} />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Specialist Care</h4>
                <p className="text-gray-600">Expert specialists across multiple departments</p>
              </div>
            </div>
          </div>
        )}

        {/* Doctors Section */}
        {activeSection === 'doctors' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our experienced physicians dedicated to providing exceptional healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {doctors.map(doctor => (
                <div key={doctor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="text-yellow-500 fill-current" size={16} />
                          <span className="text-gray-700 font-medium">{doctor.rating}</span>
                          <span className="text-gray-500">({doctor.patients} patients)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="text-gray-400" size={16} />
                        <span className="text-gray-700">{doctor.education}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="text-gray-400" size={16} />
                        <span className="text-gray-700">{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-gray-400" size={16} />
                        <span className="text-gray-700">{doctor.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Staff Section */}
        {activeSection === 'staff' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Staff</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated healthcare professionals working behind the scenes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {staff.map(member => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                        <p className="text-gray-600 text-sm mb-2">{member.department} Department</p>
                        <p className="text-gray-500 text-sm">{member.experience} experience</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">Certifications:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Equipment Section */}
        {activeSection === 'equipment' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Equipment</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                State-of-the-art medical technology for accurate diagnosis and treatment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Activity className="text-blue-600" size={24} />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Operational' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{item.model}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Department:</span> {item.department}</p>
                    <p><span className="font-medium">Installed:</span> {item.yearInstalled}</p>
                    <p><span className="font-medium">Specifications:</span> {item.specifications}</p>
                    <p><span className="font-medium">Maintenance:</span> {item.maintenance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for appointments, inquiries, or emergency services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Hospital Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{hospitalInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{hospitalInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{hospitalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Emergency Services</p>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Access QR Code</h3>
                <div className="text-center">
                  <div className="p-4 bg-gray-50 rounded-xl mb-4 inline-block">
                    <img
                      src={qrCodeUrl}
                      alt="Hospital QR Code"
                      className="w-32 h-32 mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Scan to access hospital information on your mobile device
                  </p>
                  <p className="text-xs text-gray-500 break-all">
                    {websiteUrl}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-2" size={32} />
                  <p className="text-gray-600">Interactive Map Location</p>
                  <p className="text-sm text-gray-500">{hospitalInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Hospital className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">{hospitalInfo.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{hospitalInfo.tagline}</p>
              <p className="text-gray-400 text-sm">Established {hospitalInfo.established}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setActiveSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => setActiveSection('doctors')} className="block text-gray-400 hover:text-white transition-colors">Doctors</button>
                <button onClick={() => setActiveSection('staff')} className="block text-gray-400 hover:text-white transition-colors">Staff</button>
                <button onClick={() => setActiveSection('equipment')} className="block text-gray-400 hover:text-white transition-colors">Equipment</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>{hospitalInfo.phone}</p>
                <p>{hospitalInfo.email}</p>
                <p>Emergency: 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2024 {hospitalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;