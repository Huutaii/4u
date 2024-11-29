import JobDesc from '@/app/components/JobDesc';

import '@/styles/pages/job-detail.scss';

import jobs from '../../../../public/dummy/jobs.json';

interface JobParams {
    id: string;
}

export default function JobDetail({ params }: { params: JobParams }) {
    const job = jobs.find((item) => item.id === parseInt(params.id));

    if (!job) {
        return <p>Vị trí này không tồn tại</p>;
    }

    const { id, publishAt, ...jobProps } = job;
    
    return (
        <div className='job-detail'>
            <section className='heading'>
                <img className="w-100 h-100 object-fit-cover" src='/imgs/heading.jpg' alt="article" />
            </section>
            <div className='pb-4 pb-sm-5'>
                <div className="container-lg">
                    <JobDesc {...jobProps} />
                </div>
            </div>
        </div>
    );
}
