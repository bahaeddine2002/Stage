import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockAdminService, AdminTemplate } from '../../shared/services/mock-admin.service';

@Component({
  selector: 'app-templates',
  imports: [CommonModule, FormsModule],
  templateUrl: './templates.html',
  styleUrl: './templates.css'
})
export class Templates implements OnInit {
  templates: AdminTemplate[] = [];
  selectedTemplate: AdminTemplate | null = null;
  
  uploadForm = {
    title: '',
    version: '1.0',
    file: null as File | null
  };

  generateForm = {
    baseModel: '',
    title: '',
    description: ''
  };

  constructor(private adminService: MockAdminService) {}

  ngOnInit() {
    this.loadTemplates();
  }

  loadTemplates() {
    // TODO: Replace with REST API call
    this.adminService.getTemplates().subscribe(data => {
      this.templates = data;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.file = file;
    }
  }

  uploadTemplate() {
    if (this.uploadForm.title && this.uploadForm.file) {
      // TODO: Replace with REST API call for file upload
      console.log('Uploading template:', this.uploadForm);
      
      // Mock adding new template
      const newTemplate: AdminTemplate = {
        id: `TPL-${String(this.templates.length + 1).padStart(3, '0')}`,
        title: this.uploadForm.title,
        version: this.uploadForm.version,
        updatedAt: new Date().toISOString().split('T')[0],
        createdBy: 'Me Benali'
      };
      
      this.templates.push(newTemplate);
      this.resetUploadForm();
      
      // Close modal
      const modal = document.getElementById('uploadModal');
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    }
  }

  generateTemplate() {
    if (this.generateForm.baseModel && this.generateForm.title) {
      // TODO: Replace with REST API call for template generation
      console.log('Generating template from model:', this.generateForm);
      
      // Mock adding generated template
      const newTemplate: AdminTemplate = {
        id: `TPL-${String(this.templates.length + 1).padStart(3, '0')}`,
        title: this.generateForm.title,
        version: '1.0',
        updatedAt: new Date().toISOString().split('T')[0],
        createdBy: 'Me Benali'
      };
      
      this.templates.push(newTemplate);
      this.resetGenerateForm();
      
      // Close modal
      const modal = document.getElementById('generateModal');
      if (modal) {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        bootstrapModal?.hide();
      }
    }
  }

  previewTemplate(template: AdminTemplate) {
    this.selectedTemplate = template;
  }

  resetUploadForm() {
    this.uploadForm = {
      title: '',
      version: '1.0',
      file: null
    };
  }

  resetGenerateForm() {
    this.generateForm = {
      baseModel: '',
      title: '',
      description: ''
    };
  }
}
