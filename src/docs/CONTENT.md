# 📝 Content Management

All portfolio content is in **`/data/portfolioData.ts`**. Edit this file to update content everywhere.

## Quick Edit Guide

### Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "email@example.com",
  // ... etc
}
```

### Projects
```typescript
export const projects = {
  development: [
    {
      id: 'unique-id',
      title: 'Project Title',
      description: 'Short description',
      technologies: ['React', 'TypeScript'],
      links: { github: 'url', live: 'url' }
    }
  ],
  design: [ /* same structure */ ]
}
```

### About Me
```typescript
export const aboutMe = {
  introduction: "Your intro...",
  story: ["Paragraph 1", "Paragraph 2"],
  interests: ["Interest 1", "Interest 2"]
}
```

### Experience
```typescript
export const experience = [
  {
    id: 'unique-id',
    company: "Company Name",
    role: "Your Role",
    duration: "Jan 2020 - Present",
    responsibilities: ["Task 1", "Task 2"]
  }
]
```

### Education
```typescript
export const education = [
  {
    id: 'unique-id',
    institution: "School Name",
    degree: "Degree Type",
    field: "Field of Study",
    duration: "2018-2022"
  }
]
```

### Achievements
```typescript
export const achievements = [
  {
    id: 'unique-id',
    title: "Award Name",
    organization: "Who gave it",
    date: "Month Year",
    description: "What you did"
  }
]
```

---

## Where Content Appears

- **Detective Room** → `welcomeText`, `hotspotLabels`
- **Pink Tablet** → All sections (about, projects, etc.)
- **Portfolio Book** → All sections
- **Resume** → `personalInfo`, `experience`, `education`

---

## Tips

- Keep descriptions concise and engaging
- Use consistent date formats
- Add relevant technologies/skills
- Include working links
- Test resume PDF after changes
