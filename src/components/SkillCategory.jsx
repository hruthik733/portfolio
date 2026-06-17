function SkillCategory({ category }) {
  return (
    <div className="skill-category">

      <h3>{category.category}</h3>

      <div className="skills-grid">

        {category.skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
          >
            {skill}
          </div>
        ))}

      </div>

    </div>
  );
}

export default SkillCategory;