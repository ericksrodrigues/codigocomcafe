export type Education = {course: string, institution: string, start_date: string, end_date: string};
export type Experience = {job_name: string, rule: string, start_date: string, end_date: string, tasks: string[]};
export type Field = {name: string, level: number};
export type InfoList = {list_name: string, elements: any[], field_levels: Field[]};