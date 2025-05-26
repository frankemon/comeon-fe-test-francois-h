import { useEffect, useState } from 'react'
import { get as fetchCategories } from '../../services/categories'
import { Category } from '../../types/Category'
import { ButtonGroup, useMediaQuery, useTheme } from '@mui/material'
import Button from '@mui/material/Button'

interface CategoriesProps {
    selectedCategory: number | null;
    setSelectedCategory?: (categoryId: number) => void;
}

const Categories = ({ selectedCategory, setSelectedCategory }: CategoriesProps) => {
    const [categories, setCategories] = useState<Category[]>([])
    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const getCategories = async () => {
        const response = await fetchCategories()
        if (response) {
            const categories = response || []
            setCategories(categories)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className='flex justify-center items-center'>
            {categories.length === 0 && <p className='text-center'>No categories found</p>}
            {categories.length > 0 &&
                <ButtonGroup
                    size={smallScreen ? "medium" : "large"}
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "contained" : "outlined"}
                            onClick={setSelectedCategory ? () => setSelectedCategory(category.id) : undefined}
                            sx={{ textTransform: 'none', fontSize: '0.875rem' }}
                        >
                            {category.name}
                        </Button>
                    ))}
                </ButtonGroup>
            }
        </div>
    )
}

export default Categories