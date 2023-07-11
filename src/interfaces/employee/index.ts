import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { TimeTrackingInterface } from 'interfaces/time-tracking';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  position: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  performance_evaluation?: PerformanceEvaluationInterface[];
  time_tracking?: TimeTrackingInterface[];
  company?: CompanyInterface;
  _count?: {
    performance_evaluation?: number;
    time_tracking?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  company_id?: string;
}
