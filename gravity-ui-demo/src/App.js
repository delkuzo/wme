import React, {useState} from 'react';
import {
  Button,
  TextInput,
  Select,
  Card,
  ThemeProvider,
  configure,
  Modal,
  Table,
  Badge,
  Switch
} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/dist/styles.css';

// Theme configuration
configure({
  lang: 'ru'
});

const customTheme = {
  color: {
    primary: '#FF6F61',
    secondary: '#34C759',
    error: '#FF3B30',
    warning: '#FFE066'
  }
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const tableData = [
    { id: 1, name: 'Ivan Ivanov', email: 'ivan@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Petr Petrov', email: 'petr@example.com', role: 'User', status: 'inactive' },
    { id: 3, name: 'Anna Sidorova', email: 'anna@example.com', role: 'Moderator', status: 'active' }
  ];

  const handleSubmit = () => {
    setModalOpen(false);
    setFormData({ name: '', email: '', role: '' });
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ color: '#FF6F61', marginBottom: '8px' }}>Gravity UI Demo</h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Experiments with Gravity UI design system
          </p>
        </header>

        {/* Buttons */}
        <Card size="l" style={{ marginBottom: '32px' }}>
          <Card.Header>
            <Card.Title>Buttons</Card.Title>
          </Card.Header>
          <Card.Content>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button view="action" size="m">Primary Button</Button>
              <Button view="normal" size="m">Secondary Button</Button>
              <Button view="outline" size="m">Outline Button</Button>
              <Button view="raised" size="m">Raised Button</Button>
              <Button view="flat" size="m">Flat Button</Button>
            </div>
          </Card.Content>
        </Card>

        {/* Forms */}
        <Card size="l" style={{ marginBottom: '32px' }}>
          <Card.Header>
            <Card.Title>Forms & Inputs</Card.Title>
          </Card.Header>
          <Card.Content>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TextInput
                  size="m"
                  placeholder="Enter text"
                  value={inputValue}
                  onUpdate={setInputValue}
                  label="Regular field"
                />
                <TextInput
                  size="m"
                  placeholder="Error"
                  error="Required field"
                  label="Field with error"
                />
                <Select
                  size="m"
                  value={selectValue}
                  onUpdate={setSelectValue}
                  placeholder="Select option"
                  label="Select"
                >
                  <Select.Option value="option1">Option 1</Select.Option>
                  <Select.Option value="option2">Option 2</Select.Option>
                  <Select.Option value="option3">Option 3</Select.Option>
                </Select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Switch
                    checked={switchValue}
                    onUpdate={setSwitchValue}
                    size="m"
                  />
                  <span>Switch: {switchValue ? 'On' : 'Off'}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Badge view="filled" theme="normal">Normal</Badge>
                  <Badge view="filled" theme="success">Success</Badge>
                  <Badge view="filled" theme="warning">Warning</Badge>
                  <Badge view="filled" theme="danger">Error</Badge>
                </div>
                <Button view="action" size="m" onClick={() => setModalOpen(true)}>
                  Open modal
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Table */}
        <Card size="l" style={{ marginBottom: '32px' }}>
          <Card.Header>
            <Card.Title>User Table</Card.Title>
          </Card.Header>
          <Card.Content>
            <Table data={tableData} columns={[
              { id: 'name', name: 'Name', template: (item) => item.name },
              { id: 'email', name: 'Email', template: (item) => item.email },
              { id: 'role', name: 'Role', template: (item) => item.role },
              {
                id: 'status',
                name: 'Status',
                template: (item) => (
                  <Badge view="filled" theme={item.status === 'active' ? 'success' : 'danger'}>
                    {item.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                )
              },
              {
                id: 'actions',
                name: 'Actions',
                template: (item) => (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button view="normal" size="s">Edit</Button>
                    <Button view="flat" size="s" theme="danger">Delete</Button>
                  </div>
                )
              }
            ]} />
          </Card.Content>
        </Card>

        {/* Hybrid block */}
        <Card size="l" style={{ marginBottom: '32px' }}>
          <Card.Header>
            <Card.Title>Hybrid Interface</Card.Title>
          </Card.Header>
          <Card.Content>
            <p style={{ marginBottom: '16px', color: '#666' }}>
              Mixing Gravity UI components with custom styles
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button
                view="action"
                size="m"
                style={{
                  '--g-color-base-primary': '#FF6F61',
                  '--g-color-base-primary-hover': '#e55a4a'
                }}
              >
                Hybrid Button
              </Button>
              <div style={{
                padding: '12px 16px',
                background: 'var(--color-background, #FAFAFA)',
                border: '1px solid var(--color-border, #E5E5E5)',
                borderRadius: '8px',
                color: 'var(--color-foreground, #222)'
              }}>
                Custom block
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Modal */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Header>
            <Modal.Title>Add user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <TextInput
                size="m"
                placeholder="Name"
                value={formData.name}
                onUpdate={(value) => setFormData({ ...formData, name: value })}
                label="User name"
              />
              <TextInput
                size="m"
                placeholder="Email"
                value={formData.email}
                onUpdate={(value) => setFormData({ ...formData, email: value })}
                label="Email"
              />
              <Select
                size="m"
                value={formData.role}
                onUpdate={(value) => setFormData({ ...formData, role: value })}
                placeholder="Select role"
                label="Role"
              >
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="user">User</Select.Option>
                <Select.Option value="moderator">Moderator</Select.Option>
              </Select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button view="normal" size="m" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button view="action" size="m" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App; 