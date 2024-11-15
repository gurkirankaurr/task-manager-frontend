import React from 'react';

interface CategorySliderProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['To Do', 'In Progress', 'Done', 'Timeout'];

const CategorySlider: React.FC<CategorySliderProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="category-slider">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
