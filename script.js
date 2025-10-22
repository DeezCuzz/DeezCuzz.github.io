document.addEventListener('DOMContentLoaded', function() {
    // Content
    const content = {
        name: "CEEJAY TEJADA",
        contact: "+639614625889 || ceejaytejada8@gmail.com",
        skills1: "Java Python JavaScript PHP C# Rust SQL",
        skills2: ".Net Core .Net Framework"
    };

    
    const typingSpeed = 40;

   
    function removeAllCursors() {
        const cursors = document.querySelectorAll('.typing-cursor');
        cursors.forEach(cursor => cursor.remove());
    }

    
    function typeText(elementId, text, callback) {
        const element = document.getElementById(elementId);
        let index = 0;
        
        
        const existingCursor = element.querySelector('.typing-cursor');
        if (existingCursor) {
            existingCursor.remove();
        }
        
        
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        element.appendChild(cursor);
        
        
        if (elementId === 'contact') {
            const parts = text.split(' || ');
            const phone = parts[0];
            const email = parts[1];
            
         
            function typePhone() {
                if (index < phone.length) {
                    element.insertBefore(document.createTextNode(phone[index]), cursor);
                    index++;
                    setTimeout(typePhone, typingSpeed);
                } else {
                    
                    element.insertBefore(document.createTextNode(' || '), cursor);
                    
                    
                    setTimeout(() => {
                        const emailLink = document.createElement('a');
                        emailLink.href = 'mailto:' + email;
                        emailLink.textContent = '';
                        element.insertBefore(emailLink, cursor);
                        
                        
                        let emailIndex = 0;
                        function typeEmail() {
                            if (emailIndex < email.length) {
                                emailLink.textContent += email[emailIndex];
                                emailIndex++;
                                setTimeout(typeEmail, typingSpeed);
                            } else if (callback) {
                                setTimeout(callback, 500);
                            }
                        }
                        typeEmail();
                    }, typingSpeed * 2);
                }
            }
            typePhone();
        } 
      
        else {
            function type() {
                if (index < text.length) {
                    element.insertBefore(document.createTextNode(text[index]), cursor);
                    index++;
                    setTimeout(type, typingSpeed);
                } else if (callback) {
                    setTimeout(callback, 500);
                }
            }
            type();
        }
    }

  
    typeText('name', content.name, function() {
        typeText('contact', content.contact, function() {
            typeText('skills1', content.skills1, function() {
                typeText('skills2', content.skills2, function() {
                    removeAllCursors();
                });
            });
        });
    });
});