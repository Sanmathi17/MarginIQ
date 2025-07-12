import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Bell, Database, Shield, User, Globe, BarChart3 } from 'lucide-react'

export default function Settings() {
  const [notifications, setNotifications] = useState({
    marginAlerts: true,
    tariffUpdates: true,
    supplierChanges: false,
    weeklyReports: true,
  })

  const [dataSources, setDataSources] = useState({
    erp: true,
    pricing: true,
    tariffs: true,
    inventory: false,
  })

  const [preferences, setPreferences] = useState({
    autoRefresh: true,
    darkMode: false,
    compactView: false,
  })

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  const handleDataSourceChange = (key: string, value: boolean) => {
    setDataSources(prev => ({ ...prev, [key]: value }))
  }

  const handlePreferenceChange = (key: string, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure your MarginIQ preferences and data sources</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choose which alerts and updates you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Margin Alerts</div>
                <div className="text-sm text-gray-500">Get notified when products fall below margin thresholds</div>
              </div>
              <Switch
                checked={notifications.marginAlerts}
                onCheckedChange={(checked) => handleNotificationChange('marginAlerts', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Tariff Updates</div>
                <div className="text-sm text-gray-500">Receive updates on tariff changes and their impact</div>
              </div>
              <Switch
                checked={notifications.tariffUpdates}
                onCheckedChange={(checked) => handleNotificationChange('tariffUpdates', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Supplier Changes</div>
                <div className="text-sm text-gray-500">Notifications about supplier cost changes</div>
              </div>
              <Switch
                checked={notifications.supplierChanges}
                onCheckedChange={(checked) => handleNotificationChange('supplierChanges', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Weekly Reports</div>
                <div className="text-sm text-gray-500">Receive weekly margin performance summaries</div>
              </div>
              <Switch
                checked={notifications.weeklyReports}
                onCheckedChange={(checked) => handleNotificationChange('weeklyReports', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Data Sources
            </CardTitle>
            <CardDescription>
              Configure which data sources to include in analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">ERP System</div>
                <div className="text-sm text-gray-500">Product costs and inventory data</div>
              </div>
              <Switch
                checked={dataSources.erp}
                onCheckedChange={(checked) => handleDataSourceChange('erp', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Pricing Database</div>
                <div className="text-sm text-gray-500">Current and historical pricing data</div>
              </div>
              <Switch
                checked={dataSources.pricing}
                onCheckedChange={(checked) => handleDataSourceChange('pricing', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Tariff API</div>
                <div className="text-sm text-gray-500">Real-time tariff and duty information</div>
              </div>
              <Switch
                checked={dataSources.tariffs}
                onCheckedChange={(checked) => handleDataSourceChange('tariffs', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Inventory System</div>
                <div className="text-sm text-gray-500">Shrink and inventory loss data</div>
              </div>
              <Switch
                checked={dataSources.inventory}
                onCheckedChange={(checked) => handleDataSourceChange('inventory', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* User Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              User Preferences
            </CardTitle>
            <CardDescription>
              Customize your dashboard experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Auto Refresh</div>
                <div className="text-sm text-gray-500">Automatically refresh data every 5 minutes</div>
              </div>
              <Switch
                checked={preferences.autoRefresh}
                onCheckedChange={(checked) => handlePreferenceChange('autoRefresh', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Dark Mode</div>
                <div className="text-sm text-gray-500">Use dark theme for the interface</div>
              </div>
              <Switch
                checked={preferences.darkMode}
                onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Compact View</div>
                <div className="text-sm text-gray-500">Show more data in less space</div>
              </div>
              <Switch
                checked={preferences.compactView}
                onCheckedChange={(checked) => handlePreferenceChange('compactView', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              System Information
            </CardTitle>
            <CardDescription>
              Current system status and version information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Version</span>
              <span className="text-sm font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Last Updated</span>
              <span className="text-sm font-medium">2024-01-15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Data Sources</span>
              <span className="text-sm font-medium">3/4 Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">AI Model</span>
              <span className="text-sm font-medium">GPT-4 (Latest)</span>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full">
                Check for Updates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Advanced Settings
          </CardTitle>
          <CardDescription>
            Advanced configuration options for power users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Margin Alert Threshold
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-2">
                <option>5% (Conservative)</option>
                <option selected>10% (Standard)</option>
                <option>15% (Aggressive)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2 mb-2">
                Data Refresh Interval
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-2">
                <option>1 minute</option>
                <option selected>5 minutes</option>
                <option>15 minutes</option>
                <option>30 minutes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2 mb-2">
                Default Region
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-2">
                <option>All Regions</option>
                <option selected>Northeast</option>
                <option>Southeast</option>
                <option>West</option>
                <option>Southwest</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2mb-2">
                Export Format
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mb-2">
                <option selected>Excel (.xlsx)</option>
                <option>CSV</option>
                <option>PDF</option>
                <option>JSON</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">
          Reset to Defaults
        </Button>
        <Button>
          Save Changes
        </Button>
      </div>
    </div>
  )
} 