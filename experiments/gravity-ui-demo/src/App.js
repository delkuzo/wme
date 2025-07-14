import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎨 Gravity UI Demo</h1>
        <p>Modern design system components showcase</p>
      </header>

      <nav className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'buttons' ? 'active' : ''}`}
          onClick={() => setActiveTab('buttons')}
        >
          Buttons
        </button>
        <button 
          className={`tab-button ${activeTab === 'forms' ? 'active' : ''}`}
          onClick={() => setActiveTab('forms')}
        >
          Forms
        </button>
        <button 
          className={`tab-button ${activeTab === 'cards' ? 'active' : ''}`}
          onClick={() => setActiveTab('cards')}
        >
          Cards
        </button>
        <button 
          className={`tab-button ${activeTab === 'modals' ? 'active' : ''}`}
          onClick={() => setActiveTab('modals')}
        >
          Modals
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'buttons' && (
          <section className="component-section">
            <h2>Button Components</h2>
            <div className="button-grid">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-success">Success Button</button>
              <button className="btn btn-danger">Danger Button</button>
              <button className="btn btn-warning">Warning Button</button>
              <button className="btn btn-info">Info Button</button>
              <button className="btn btn-light">Light Button</button>
              <button className="btn btn-dark">Dark Button</button>
            </div>
            
            <h3>Button Sizes</h3>
            <div className="button-grid">
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary">Normal</button>
              <button className="btn btn-primary btn-lg">Large</button>
            </div>

            <h3>Button States</h3>
            <div className="button-grid">
              <button className="btn btn-primary" disabled>Disabled</button>
              <button className="btn btn-primary loading">Loading...</button>
            </div>
          </section>
        )}

        {activeTab === 'forms' && (
          <section className="component-section">
            <h2>Form Components</h2>
            <div className="form-demo">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="select">Select Option</label>
                <select id="select" className="form-control">
                  <option>Choose an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
              </div>

              <div className="form-group">
                <label className="radio-label">
                  <input type="radio" name="radio" className="form-radio" />
                  <span className="radiomark"></span>
                  Option 1
                </label>
                <label className="radio-label">
                  <input type="radio" name="radio" className="form-radio" />
                  <span className="radiomark"></span>
                  Option 2
                </label>
              </div>

              <button className="btn btn-primary">Submit Form</button>
            </div>
          </section>
        )}

        {activeTab === 'cards' && (
          <section className="component-section">
            <h2>Card Components</h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-header">
                  <h3>Card Title</h3>
                </div>
                <div className="card-body">
                  <p>This is a basic card with some content. Cards are used to group related content and actions.</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-sm">Action</button>
                </div>
              </div>

              <div className="card card-elevated">
                <div className="card-header">
                  <h3>Elevated Card</h3>
                </div>
                <div className="card-body">
                  <p>This card has elevated styling with shadow effects.</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-secondary btn-sm">Cancel</button>
                  <button className="btn btn-primary btn-sm">Save</button>
                </div>
              </div>

              <div className="card card-featured">
                <div className="card-header">
                  <h3>Featured Card</h3>
                  <span className="badge badge-primary">New</span>
                </div>
                <div className="card-body">
                  <p>This is a featured card with special styling and a badge.</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success btn-sm">Get Started</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'modals' && (
          <section className="component-section">
            <h2>Modal Components</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Open Modal
            </button>

            {isModalOpen && (
              <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>Modal Title</h3>
                    <button 
                      className="modal-close"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>This is a modal dialog. You can put any content here.</p>
                    <p>Click outside the modal or the close button to close it.</p>
                  </div>
                  <div className="modal-footer">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button className="btn btn-primary">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React and Gravity UI Design System</p>
      </footer>
    </div>
  );
}

export default App;
