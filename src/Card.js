import React  from 'react';

function Card(probs){
    return (
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{probs.subscribtionType.PlanType}</h5>
            <h6 class="card-price text-center">${probs.subscribtionType.CostPerMonth} <span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">  
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{probs.subscribtionType.PlanType === "Free" ? <> {probs.subscribtionType.UserType} </> :  <b> {probs.subscribtionType.UserType} </b>}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{probs.subscribtionType.StorageCapacity} Storage</li> 
              <li className={probs.subscribtionType.Projects[0].Enabled ? "":"text-muted"}><span class="fa-li"><i className={probs.subscribtionType.Projects[0].Enabled ? "fas fa-check":"fas fa-times"}></i></span>{probs.subscribtionType.Projects[0].Type}</li>                           
              <li className={probs.subscribtionType.Access.Enabled ? "":"text-muted"}><span class="fa-li"><i className={probs.subscribtionType.Access.Enabled ? "fas fa-check":"fas fa-times"}></i></span>{probs.subscribtionType.Access.Type}</li>
              <li className={probs.subscribtionType.Projects[1].Enabled ? "":"text-muted"}><span class="fa-li"><i className={probs.subscribtionType.Projects[1].Enabled ? "fas fa-check":"fas fa-times"}></i></span>{probs.subscribtionType.Projects[1].Type}</li>
              <li className={probs.subscribtionType.PhoneSupport.Enabled ? "":"text-muted"}><span class="fa-li"><i className={probs.subscribtionType.PhoneSupport.Enabled ? "fas fa-check":"fas fa-times"}></i></span>{probs.subscribtionType.PhoneSupport.Type}</li>
              <li className={probs.subscribtionType.Subdomain.Enabled ? "":"text-muted"}><span class="fa-li"><i className={probs.subscribtionType.Subdomain.Enabled ? "fas fa-check":"fas fa-times"}></i></span>
              {probs.subscribtionType.Subdomain.Unlimited ? <b> Unlimited </b> : <> </>}              
              {probs.subscribtionType.Subdomain.Type}
              </li>
              <li className={probs.subscribtionType.StatusReports.Enabled ? "":"text-muted"}><span class="fa-li"><i class={probs.subscribtionType.StatusReports.Enabled ? "fas fa-check":"fas fa-times"}></i></span>{probs.subscribtionType.StatusReports.Type} Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="https://www.bootstrapcdn.com/" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Card;