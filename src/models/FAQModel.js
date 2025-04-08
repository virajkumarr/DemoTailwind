// FAQModel.js - Model for FAQ data

// FAQ question model
class FAQQuestion {
  constructor(data = {}) {
    this.id = data.id || Date.now().toString();
    this.email = data.email || '';
    this.subject = data.subject || '';
    this.message = data.message || '';
    this.date = data.date || new Date().toISOString();
    this.reply = data.reply || '';
    this.repliedAt = data.repliedAt || null;
    this.status = data.status || 'pending'; // pending, replied, archived
  }

  // Convert to plain object for API requests
  toJSON() {
    return {
      id: this.id,
      email: this.email,
      subject: this.subject,
      message: this.message,
      date: this.date,
      reply: this.reply,
      repliedAt: this.repliedAt,
      status: this.status
    };
  }

  // Create from API response
  static fromJSON(json) {
    return new FAQQuestion(json);
  }
}

// API service for FAQ operations
const FAQService = {
  // Get all FAQ questions
  async getQuestions() {
    try {
      const response = await fetch('http://localhost:3000/faq/questions');
      const data = await response.json();
      
      if (data.success) {
        return data.questions.map(question => FAQQuestion.fromJSON(question));
      } else {
        throw new Error(data.message || 'Failed to fetch questions');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  },

  // Reply to a question
  async replyToQuestion(questionId, replyText) {
    try {
      const response = await fetch(`http://localhost:3000/faq/reply/${questionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply: replyText }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error replying to question:', error);
      throw error;
    }
  },

  // Delete a question
  async deleteQuestion(questionId) {
    try {
      const response = await fetch(`http://localhost:3000/faq/delete/${questionId}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting question:', error);
      throw error;
    }
  },

  // Convert contact submission to FAQ question
  async convertContactToFAQ(contactId) {
    try {
      const response = await fetch(`http://localhost:3000/faq/convert/${contactId}`, {
        method: 'POST',
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error converting contact to FAQ:', error);
      throw error;
    }
  }
};

export { FAQQuestion, FAQService }; 