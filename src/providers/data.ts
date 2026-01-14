import { BaseRecord, DataProvider, GetListParams, GetListResponse } from '@refinedev/core'

const mockSubjects = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'Computer Science',
        description: 'An introductory course covering the basics of programming and algorithms.',
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Calculus II',
        department: 'Mathematics',
        description: 'Advanced calculus topics including integration techniques and infinite series.',
    },
    {
        id: 3,
        code: 'PHY102',
        name: 'General Physics II',
        department: 'Physics',
        description: 'A continuation of General Physics I, covering electricity, magnetism, and optics.',
    },
]

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
        if (resource !== 'subjects') {
            return { data: [] as TData[], total: 0 }
        }
        return {
            data: mockSubjects as unknown as TData[],
            total: mockSubjects.length,
        }
    },

    getOne: async () => {
        throw new Error('This function is not present in mock mode.')
    },
    create: async () => {
        throw new Error('This function is not present in mock mode.')
    },
    update: async () => {
        throw new Error('This function is not present in mock mode.')
    },
    deleteOne: async () => {
        throw new Error('This function is not present in mock mode.')
    },

    getApiUrl: () => '',
}
