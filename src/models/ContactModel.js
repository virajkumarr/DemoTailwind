// ContactModel.js - Model for contact form data

// Contact form submission model
class ContactSubmission {
  constructor(data = {}) {
    this.id = data.id || Date.now().toString();
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.subject = data.subject || '';
    this.message = data.message || '';
    this.date = data.date || new Date().toISOString();
    this.status = data.status || 'pending'; // pending, replied, archived
    this.reply = data.reply || '';
    this.repliedAt = data.repliedAt || null;
  }

  // Convert to plain object for API requests
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
      date: this.date,
      status: this.status,
      reply: this.reply,
      repliedAt: this.repliedAt
    };
  }

  // Create from API response
  static fromJSON(json) {
    return new ContactSubmission(json);
  }
}

// API service for contact form operations
const ContactService = {
  // Submit a new contact form
  async submitContact(formData) {
    try {
      const response = await fetch('http://localhost:3000/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString()
        }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Get all contact submissions
  async getContactSubmissions() {
    try {
      const response = await fetch('http://localhost:3000/contact/submissions');
      const data = await response.json();
      
      if (data.success) {
        return data.submissions.map(submission => ContactSubmission.fromJSON(submission));
      } else {
        throw new Error(data.message || 'Failed to fetch contact submissions');
      }
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      throw error;
    }
  },

  // Reply to a contact submission
  async replyToContact(contactId, replyText) {
    try {
      const response = await fetch(`http://localhost:3000/contact/reply/${contactId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply: replyText }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error replying to contact:', error);
      throw error;
    }
  },

  // Delete a contact submission
  async deleteContact(contactId) {
    try {
      const response = await fetch(`http://localhost:3000/contact/delete/${contactId}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  }
};

export { ContactSubmission, ContactService }; 