import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFilter = (page) => {
    const [filteredPage, setfilteredPage] = useState([])
    const searchFilter = useSelector((store) => store.filter)

    useEffect(() => {
        if (searchFilter.roles.length !== 0 ||
            // searchFilter.employees.length !== 0 ||
            searchFilter.experience.length !== 0 ||
            searchFilter.location.length !== 0 ||
            searchFilter.basepay.length !== 0 ||
            searchFilter.searchfield.length >= 3
        ) {

            function checkBasePay(arr, bp) {
                for (let i = 0; bp && i < arr.length; i++) {
                    if (bp >= arr[i]) {
                        return true;
                    }
                }
                return false;
            }

            setfilteredPage(
                page.filter(job =>
                    (job.jobRole && searchFilter.roles.map(s => s.toLowerCase()).includes(job.jobRole.toLowerCase())) ||
                    (job.maxExp && searchFilter.experience.includes(job.maxExp)) ||
                    (job.minExp && searchFilter.experience.includes(job.minExp)) ||
                    (job.location && searchFilter.location.map(s => s.toLowerCase()).includes(job.location.toLowerCase())) ||
                    (job.minJdSalary && checkBasePay(searchFilter.basepay.map(s => s.charAt(0)), job.minJdSalary)) ||
                    (job.maxJdSalary && searchFilter.basepay.map(s => s.charAt(0)).includes(job.maxJdSalary)) ||
                    job.location.toLowerCase().includes(searchFilter.searchfield.toLowerCase()) ||
                    job.jobRole.toLowerCase().includes(searchFilter.searchfield.toLowerCase())
                )
            )
        } else {
            setfilteredPage(page)
        }
    }, [searchFilter, page])

    return filteredPage;
}

export default useFilter;