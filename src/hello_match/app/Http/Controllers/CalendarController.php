<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class CalendarController extends Controller
{
    public function index()
    {
        // $selectDay = filter_input(INPUT_POST, 'selectDay');
        // $yearNext = filter_input(INPUT_POST, 'yearNext');
        // $monthPrev = filter_input(INPUT_POST, 'monthPrev');
        // $yearPrev = filter_input(INPUT_POST, 'yearPrev');

        

        $userCarendarData = ["today"=> date("Y-m-d H:i:s")];

        return response()->json($userCarendarData);

        

        // $userCarendarData = [
        //     [
        //         'id' => 1,
        //         'title' => 'イベント1',
        //         'date' => '2022-01-01',
        //     ],
        //     [
        //         'id' => 2,
        //         'title' => 'イベント2',
        //         'date' => '2022-01-02',
        //     ],
        // ];
    
        // return response()->json($userCarendarData);

        // }
        
    }
    // function calendar(){
    //     $today = date('Y-m-d');

    //     $nextMonthFlg(true) {
    //         $currentMonth = date('m');
    //         $currentMonth++;
    //     } 

    //     if($currentMonth = '12'){
    //         $currentYear = date('Y');
    //         $currentYear++;
    //         $currentMonth = '1';
    //     }
    // }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
