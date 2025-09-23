import { cn } from './cn'

describe('cn utility', () => {
    it('combines multiple class names', () => {
        expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3')
    })

    it('handles conditional classes with objects', () => {
        expect(cn('base', { active: true, disabled: false })).toBe(
            'base active'
        )
    })

    it('filters out falsy values', () => {
        expect(cn('class1', null, undefined, false, 'class2')).toBe(
            'class1 class2'
        )
    })

    it('handles arrays of classes', () => {
        expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3')
    })

    it('handles mixed types', () => {
        expect(
            cn(
                'base',
                ['array1', 'array2'],
                { conditional: true, hidden: false },
                'final'
            )
        ).toBe('base array1 array2 conditional final')
    })

    it('returns empty string for no arguments', () => {
        expect(cn()).toBe('')
    })

    it('handles empty strings and whitespace', () => {
        expect(cn('', '  ', 'valid')).toBe('   valid')
    })
})
