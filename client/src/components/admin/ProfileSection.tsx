import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Save, 
  Shield,
  Calendar,
  Activity,
  Edit2
} from 'lucide-react';

interface AdminProfile {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  location?: string;
  bio?: string;
  role: string;
  avatar?: string;
  lastLogin: string;
  createdAt: string;
}

interface ActivityLog {
  id: string;
  action: string;
  description: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning';
}

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<AdminProfile>>({});
  const queryClient = useQueryClient();

  // Mock data - replace with actual API calls
  const mockProfile: AdminProfile = {
    id: 'admin-1',
    username: 'admin',
    email: 'admin@InfiniQode.com',
    firstName: 'John',
    lastName: 'Admin',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Digital marketing expert and full-stack developer with 8+ years of experience building scalable web applications.',
    role: 'Administrator',
    avatar: '/api/placeholder/128/128',
    lastLogin: '2024-01-30T10:30:00Z',
    createdAt: '2023-06-15T09:00:00Z'
  };

  const mockActivity: ActivityLog[] = [
    {
      id: '1',
      action: 'Template Created',
      description: 'Created new SaaS service template',
      timestamp: '2024-01-30T10:15:00Z',
      type: 'success'
    },
    {
      id: '2',
      action: 'Profile Updated',
      description: 'Updated contact information',
      timestamp: '2024-01-29T14:22:00Z',
      type: 'info'
    },
    {
      id: '3',
      action: 'SEO Settings',
      description: 'Modified meta tags for blog pages',
      timestamp: '2024-01-29T11:45:00Z',
      type: 'info'
    },
    {
      id: '4',
      action: 'Security Alert',
      description: 'Password changed successfully',
      timestamp: '2024-01-28T16:30:00Z',
      type: 'warning'
    }
  ];

  const handleInputChange = (field: keyof AdminProfile, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Here you would call the actual API to update the profile
    console.log('Saving profile:', formData);
    setIsEditing(false);
    // Show success message
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <div className="w-2 h-2 bg-green-400 rounded-full"></div>;
      case 'warning':
        return <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-blue-400 rounded-full"></div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Profile Management</h2>
          <p className="text-gray-400 mt-1">Manage your admin profile and account settings</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          className="bg-green-500 hover:bg-green-600"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info Card */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
              <CardDescription className="text-gray-400">
                Update your personal information and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {mockProfile.firstName[0]}{mockProfile.lastName[0]}
                    </span>
                  </div>
                  {isEditing && (
                    <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600">
                      <Camera className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {mockProfile.firstName} {mockProfile.lastName}
                  </h3>
                  <p className="text-gray-400">@{mockProfile.username}</p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">
                    <Shield className="w-3 h-3 mr-1" />
                    {mockProfile.role}
                  </Badge>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input
                    id="firstName"
                    value={isEditing ? (formData.firstName ?? mockProfile.firstName) : mockProfile.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input
                    id="lastName"
                    value={isEditing ? (formData.lastName ?? mockProfile.lastName) : mockProfile.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={isEditing ? (formData.email ?? mockProfile.email) : mockProfile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                  <Input
                    id="phone"
                    value={isEditing ? (formData.phone ?? mockProfile.phone ?? '') : mockProfile.phone ?? ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="location" className="text-gray-300">Location</Label>
                  <Input
                    id="location"
                    value={isEditing ? (formData.location ?? mockProfile.location ?? '') : mockProfile.location ?? ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio" className="text-gray-300">Bio</Label>
                  <Textarea
                    id="bio"
                    value={isEditing ? (formData.bio ?? mockProfile.bio ?? '') : mockProfile.bio ?? ''}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-900/50 border-slate-600 text-white disabled:opacity-60 resize-none"
                    rows={3}
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="border-slate-600 text-slate-300">
                    Cancel
                  </Button>
                  <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Account Stats */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Account Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Member since</span>
                <span className="text-white font-medium">
                  {formatDate(mockProfile.createdAt)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Last login</span>
                <span className="text-white font-medium">
                  {formatDate(mockProfile.lastLogin)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Role</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {mockProfile.role}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{activity.action}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}