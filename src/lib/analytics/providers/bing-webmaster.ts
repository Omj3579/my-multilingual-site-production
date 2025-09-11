// Bing Webmaster Tools Provider
export class BingWebmasterProvider {
  private verificationCode: string;

  constructor(verificationCode: string) {
    this.verificationCode = verificationCode;
  }

  /**
   * Initialize Bing Webmaster Tools verification
   * This adds the meta tag to the document head for domain verification
   */
  initialize(): void {
    if (typeof window === 'undefined' || !this.verificationCode) {
      return;
    }

    try {
      // Check if verification meta tag already exists
      const existingTag = document.querySelector('meta[name="msvalidate.01"]');
      
      if (!existingTag) {
        // Create and add the verification meta tag
        const metaTag = document.createElement('meta');
        metaTag.name = 'msvalidate.01';
        metaTag.content = this.verificationCode;
        document.head.appendChild(metaTag);
        
        console.log('Bing Webmaster Tools verification tag added');
      }
    } catch (error) {
      console.error('Failed to initialize Bing Webmaster Tools verification:', error);
    }
  }

  /**
   * Check if Bing Webmaster Tools is properly configured
   */
  isConfigured(): boolean {
    return !!this.verificationCode;
  }

  /**
   * Get verification code
   */
  getVerificationCode(): string {
    return this.verificationCode;
  }

  /**
   * Update verification code (useful for dynamic updates)
   */
  updateVerificationCode(newCode: string): void {
    this.verificationCode = newCode;
    
    // Remove existing tag if present
    const existingTag = document.querySelector('meta[name="msvalidate.01"]');
    if (existingTag) {
      existingTag.remove();
    }
    
    // Re-initialize with new code
    this.initialize();
  }
}

export default BingWebmasterProvider;
